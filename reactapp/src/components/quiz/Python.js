import React, { Component, Fragment } from 'react'
import './Play.css'
import isEmpty from '../utils/is-empty';
import questions from '../questions/Python.json';
import M from 'materialize-css';
export default class Python extends Component {
    constructor(props){
        super(props);
        this.state={
            questions,
            currentQuestion:{},
            nextQuestion:{},
            previousQuestion:{},
            answer:'',
            numberofQuestions:0,
            nimberofAnsweredQuestion:0,
            currentQuestionIndex:0,
            correctAnswers:0,
            wrongAnswers:0,
            score:0,
            nextButtonDisabled:false,
            previousButtonDisabled:true,
      
    time:{}       }
    this.interval=null
    }
    componentDidMount(){
        const{questions,currentQuestion,nextQuestion,previousQuestion}=this.state;
        this.displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
        this.startTimer(); 
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    displayQuestions=(questions=this.state.questions,currentQuestion,nextQuestion,previousQuestion)=>{
        let {currentQuestionIndex}=this.state;
        if(!isEmpty(this.state.questions)){
            questions=this.state.questions;
            currentQuestion=questions[currentQuestionIndex];
            nextQuestion=questions[currentQuestionIndex+1];
            previousQuestion=questions[currentQuestionIndex-1];
            const answer=currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                numberofQuestions:questions.length,
                answer
            },()=>{
                this.handleDisableButton();
            });
        }
    };
    IncreaseCount=()=>{
        this.setState({
            counter:5
        });
    };
    handleOptionClick=(e)=>{
        if(e.target.innerHTML.toLowerCase()===this.state.answer.toLowerCase()){
            this.correctAnswer();
        }else{
            this.wrongAnswer();
        }

    }
    correctAnswer=()=>{
        M.toast({
            html:'Correct answer!',
            classes:'toast-valid',
            displayLength:50
        });
        this.setState(prevState=>({
            score:prevState.score+1,
            correctAnswers:prevState.correctAnswers+1,
            currentQuestionIndex:prevState.currentQuestionIndex+1,
            nimberofAnsweredQuestion:prevState.nimberofAnsweredQuestion+1
        }),()=>{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion,this.state.answer)
        });
    }
    wrongAnswer=()=>{
        M.toast({
            html:'wrong answer!',
            classes:'toast-invalid',
            displayLength:500
        });
        this.setState(prevState=>({
            wrongAnswers:prevState.wrongAnswers+1 ,
            currentQuestionIndex:prevState.currentQuestionIndex+1,
            nimberofAnsweredQuestion:prevState.nimberofAnsweredQuestion+1
        }),()=>{
            if(this.state.nextQuestion===undefined){
                this.endGame();
            }else{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion)
    }});
    }
    startTimer=()=>{
        const countDownTime=Date.now()+50000;
        this.interval=setInterval(()=>{
            const now=new Date();
            const distance=countDownTime-now;
            const minutes=distance%(1000*60*60)/(1000*60);
            const seconds=distance%(1000*60)/(1000);
            if(distance<0){
                clearInterval(this.interval);
                this.setState({
                    time:{
                        minutes:0,
                        seconds:0
                    }
                },()=>{
                   this.endGame();
                });
            }else{
                this.setState({
                    time:{
                        minutes,
                        seconds
                    }})
            }
        },1000)
    }
    handleDisableButton=()=>{
        if(this.state.previousQuestion===undefined|| this.state.currentQuestionIndex===0){
            this.setState({
                previousButtonDisabled:true
            });
        }else{
            this.setState({
                previousButtonDisabled:false
            });
        }
        if(this.state.nextQuestion===undefined|| this.state.currentQuestionIndex+1===this.state.numberofQuestions){
            this.setState({
                nextButtonDisabled:true
            });
        }else{
            this.setState({
                nextButtonDisabled:false
            });
        }
    }
    handleNextButtonClick=()=>{
        if(this.state.nextQuestion!==undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex+1
            }),()=>{
                this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion)
            });
        }
    }
    handlePreviousButtonClick=()=>{
        if(this.state.previousQuestion!==undefined){
            this.setState(prevState=>({
                currentQuestionIndex:prevState.currentQuestionIndex-1
            }),()=>{
                this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion)
            });
        }
    }
    endGame=()=>{alert('Quiz has ended!');
              const{state}=this;
             
              const PlayerStats={
                score:state.score,
                numberofQuestions:state.numberofQuestions,
                nimberofAnsweredQuestion:state.nimberofAnsweredQuestion,
                correctAnswers:state.correctAnswers,
                wrongAnswers:state.wrongAnswers

              }
              setTimeout(()=>{
                console.log(PlayerStats)
              //  this.props.navigate('/QuizSummary',PlayerStats);
              this.Change()
              },1000);
}
Change=()=>{
    if (document.getElementById('box').checked===true){
        document.getElementById('box').style.display='block'
    } else {
        document.getElementById('box').style.display='none'
    }
    if (document.getElementById('summary').checked===true){
        document.getElementById('summary').style.display='none'
    } else {
        document.getElementById('summary').style.display='block'
    }
}
  render() {
   const {currentQuestion,currentQuestionIndex,numberofQuestions,time,nimberofAnsweredQuestion,correctAnswers,wrongAnswers,score}=this.state;
   
    let stats,remark;
    if(score>=0 && score<=30){
        remark='You need more Practice';
    } else if(score>30 && score<=50){
        remark="Better luck next time";
    }
    else if(score>50 && score<=70){
        remark="You can do better";
    }
    else if(score>70 && score<=85){
        remark="You did great";
    }
    else{
        remark='You\'re an absolute genius';
    }
    return (
      <div>
        <Fragment>
                <div className='container' id='box'>
                <div className='questions'>
                    <div className='lifeline-container'>
                        <p>
                            <span className='left'>
                            {currentQuestionIndex+1}of{numberofQuestions}
                            </span>
                            <span className='right'>
                            {time.minutes}:{time.seconds}
                            </span>
                        </p>
                    </div>
                    <h5>{currentQuestion.question}</h5>
                   <div className='options-container'>
                    <p className='options' onClick={this.handleOptionClick}>{currentQuestion.option1}</p>
                    <p className='options' onClick={this.handleOptionClick}>{currentQuestion.option2}</p>
                   </div>
                   <div className='options-container'>
                    <p className='options' onClick={this.handleOptionClick}>{currentQuestion.option3}</p>
                    <p className='options' onClick={this.handleOptionClick}>{currentQuestion.option4}</p>
                   </div>
                   <div className='Button-container'>
                    <button onClick={this.handlePreviousButtonClick} >
                        Previous</button>
                    <button onClick={this.handleNextButtonClick} >Next</button>
                    <button onClick={this.Change}>Quit</button>
                    
                   </div>
                </div>
                </div>
                <div className='summary' id='summary'>
                   <h1 id='score' className='remark'>{remark}</h1>
                   <h1 className='score' >Your score:{score}</h1>
                   <p className='statleft'>Total number of questions:{numberofQuestions}</p>
                    <p className='statleft'>Total number of questions answered:{nimberofAnsweredQuestion}</p>
                   <p className='statleft'>Total number of correct answers:{correctAnswers}</p>
                   <p className='statleft'>Total number of wrong answers:{wrongAnswers}</p>
                </div>
        </Fragment>
      </div>
    )
  }
  
}

