# -*- coding: utf-8 -*-
"""Heart Disease Platform Team.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1-vWYYXLYLzyj-tV34RBIQ5HCY7b1k9Za

Imports
"""

import pandas as pd
import seaborn as sns
import os
import glob
from matplotlib import pyplot as plt

from sklearn.model_selection import train_test_split

"""Read CSVs from Github

"""

urlC = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/Cleveland.csv'
urlH = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/hungarian.csv'
urlS = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/switzerland.csv'
urlV = 'https://raw.githubusercontent.com/atjain02/heart-disease-detector/main/va.csv'

dfC = pd.read_csv(urlC)
dfH = pd.read_csv(urlH)
dfS = pd.read_csv(urlS)
dfV = pd.read_csv(urlV)

"""Combine datasets"""

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

"""Support Vector Machine """

# Importing Dependencies
from sklearn.model_selection import train_test_split
from sklearn.svm import SVC
from sklearn.metrics import classification_report

X_train, X_test, y_train, y_test = train_test_split(df[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
       'exang', 'oldpeak']],df['heart disease'],test_size = 0.25)

# Training the algorithm
svclassifier = SVC(kernel = "linear")
svclassifier.fit(X_train,y_train)

#Predicting Classes
y_pred = svclassifier.predict(X_test)
print (y_pred)

#Evaluating the model
print(classification_report(y_test,y_pred))
#Add final and testing score

"""Logistic Regression

---


"""

# Importing Dependencies
from sklearn.linear_model import LogisticRegression

# Splitting the dataset into training and testing datasets
X_train, X_test, y_train, y_test = train_test_split(df[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
       'exang', 'oldpeak']],df['heart disease'],test_size=0.2)

# Printing variable
X_test

# Creating the model and training it using the training dataset
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Using testing data set to test model
model.predict(X_test)

# Checking model's accuracy
model.score(X_test, y_test)

"""Naive Bayes Algorithm"""

# importing required libraries
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score

# seperate the independent and target variable on training data, don't know how to do this with this data because there are more than 2 columns
#train_x = train_data.drop(columns=[''],axis=1)
#train_y = train_data['COLUMN_1_NAME']

# seperate the independent and target variable on testing data
#test_x = test_data.drop(columns=['COLUMN_1_NAME'],axis=1)
#test_y = test_data['COLUMN_1_NAME']

train_x, test_x, train_y, test_y = train_test_split(df[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
       'exang', 'oldpeak']],df['heart disease'],test_size=0.2)

#Create the object of the Naive Bayes model
model = GaussianNB()

# fit the model with the training data
model.fit(train_x,train_y)

# predict the target on the train dataset
predict_train = model.predict(train_x)
print('Target on train data',predict_train)

# Accuray Score on train dataset
accuracy_train = accuracy_score(train_y,predict_train)
print('accuracy_score on train dataset : ', accuracy_train)

# predict the target on the test dataset
predict_test = model.predict(test_x)
print('Target on test data',predict_test)

# Accuracy Score on test dataset
accuracy_test = accuracy_score(test_y,predict_test)
print('accuracy_score on test dataset : ', accuracy_test)

"""Random Forest Classifier"""

from sklearn.ensemble import RandomForestClassifier

rfs = RandomForestClassifier(n_estimators=250, max_depth=6)

train_x, test_x, train_y, test_y = train_test_split(df[['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach',
       'exang', 'oldpeak']],df['heart disease'],test_size=0.2)

rfs.fit(train_x,train_y)

rfs.predict(test_x)

rfs.score(X_test,y_test)