import pandas as pd
import seaborn as sns
import os
import glob
from matplotlib import pyplot as plt
import joblib
from sklearn.metrics import confusion_matrix
from sklearn.ensemble import RandomForestClassifier


from sklearn.model_selection import train_test_split

urlC = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/Cleveland.csv'
urlH = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/hungarian.csv'
urlS = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/switzerland.csv'
urlV = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/va.csv'

dfC = pd.read_csv(urlC)
dfH = pd.read_csv(urlH)
dfS = pd.read_csv(urlS)
dfV = pd.read_csv(urlV)


#all_filenames = [i for i in glob.glob('*.csv')]
#df = pd.concat([pd.read_csv(f) for f in all_filenames])
df = pd.concat([dfC, dfH, dfS, dfV])
df.to_csv("data.csv", index=False)

"""Visualize null values"""

df = pd.read_csv("data.csv", na_values = ["?"])
print(df)
df.isnull().sum()

sns.heatmap(df.isnull())

df = df.drop(columns=['slope', 'ca', 'thal'])

df = df.dropna()
df

index = [i for i in range(740)]
df.index = index

df

df.describe()

df.shape

df.head()

df.columns

df.nunique()

correlation = df.corr()
sns.heatmap(correlation)
correlation

sns.pairplot(df)



rfs = RandomForestClassifier(n_estimators=250, max_depth=6)

train_x, test_x, train_y, test_y = train_test_split(df[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
       'exang', 'oldpeak']],df['heart disease'],test_size=0.2)

rfs.fit(train_x,train_y)

rfs.predict(test_x)

# rfs.score(X_test,y_test)

prediction = rfs.predict(test_x)
print("matrix:")
print(confusion_matrix(test_y, prediction))

joblib.dump(rfs, 'rfs.joblib')
