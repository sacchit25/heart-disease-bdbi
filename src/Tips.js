import React from 'react';
//Add relevant imports

export default class Tips extends React.Component{

    constructor(props)
    {
        super(props);
        this.state = {
            tempMsgA: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia facilisis libero, vitae accumsan metus condimentum nec. Nulla bibendum posuere condimentum. Aenean lacinia nulla vitae leo volutpat finibus. Morbi finibus pretium tincidunt. Cras quis eros quis augue dictum pulvinar. Nulla tempor feugiat eros, tempus iaculis nisi. Suspendisse lacinia gravida urna, sit amet pretium ante aliquam sit amet. Etiam vel risus ullamcorper, hendrerit risus vitae, mollis turpis. Curabitur nec magna at odio molestie luctus quis eget justo. Aenean consectetur nisl quis quam placerat, ut tempus tellus ornare. Praesent sollicitudin nisi vestibulum ligula venenatis, ac pulvinar quam pulvinar. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed sed enim nulla. Pellentesque convallis mauris quis mi varius, et tristique justo interdum. Morbi porta odio eu eros venenatis, sed feugiat enim condimentum. Fusce magna nisi, consectetur ac risus ac, efficitur consectetur purus.",
            tempMsgB: "TLDR: Aliquam ut orci id orci euismod posuere porta ac sapien. Praesent faucibus enim quis augue eleifend, a egestas quam bibendum. Vestibulum sit amet finibus arcu. Nam nisi massa."
        }
    }

    //render form
    render(){
        return (
            <div id = "tips">
                <div id = "highRiskTips"style = {style.tipsContainer}>
                    <h1 id = "rHeader" style = {style.rHeader}>Tips to reduce risk of heart disease (prevantitive measures):</h1>
                    <p1 id = "rParagraph" style ={style.rParagraph}>{this.state.tempMsgA}</p1>{/* Paragraph about what steps to take if you're determined to be at high risk of heart disease*/}
                    <u1 style = {style.list}>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                        <li>Item4</li>
                    </u1>
                    <div id = "tldr" style = {style.tldr}>{this.state.tempMsgB}</div>
                </div>
                <div  id = "lowRiskTips" style = {style.tipsContainer}>
                    <h1 id = "rHeader" style = {style.rHeader}>Tips to maintain good health for low risk patients:</h1>
                    <p1 id = "rParagraph" style ={style.rParagraph}>{this.state.tempMsgA}</p1>{/* Paragraph about what steps to take if you're determined to be at low risk of heart disease*/}
                    <u1 style = {style.list}>
                        <li>Item1</li>
                        <li>Item2</li>
                        <li>Item3</li>
                        <li>Item4</li>
                    </u1>
                    <div id = "tldr" style = {style.tldr}>{this.state.tempMsgB}</div>
                </div>
            </div>
        );
    }

}

//CSS styling
const style = {
    
    rHeader:{
        width: "100%",
        height: "3vh",
        fontSize: "200%",
        textAlign: "center"

    },
    rParagraph:{
        width: "100%",
        height: "10vh",
        fontSize: "100%",
        textAlign: "center",  
        padding: "0px"
    },
    tldr:{
        paddingTop:"20px",
        width: "100%",
        fontSize: "150%",
        textAlign: "center",  
        padding: "0px"
    },
    tipsContainer:{
        paddingLeft:"5%",
        paddingRight:"5%"
    },
    list:{
        width: "100%",
        height: "10vh",
        fontSize: "100%",
        textAlign: "center",  
        padding: "10px"
    }
}