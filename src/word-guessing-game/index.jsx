
import Controller from "./controller";
import Hint from "./hint";
import Keybaord from "./keyboard";
import ScoreBoard from "./score-board";

import './style.css';

import {Questions} from './constant';
import {  useEffect, useState } from "react";

const DEFAULT_START_INDEX = 0;

function WordGuessingGame() {
 
    const [questions, setQuestions] = useState(structuredClone(Questions));
    const [activeQuestionIndex,setActiveQuestionIndex] = useState(DEFAULT_START_INDEX);
    const [score, setScore] = useState(0);
    const [answerGivenByUser, setAnswerGivenByUser] = useState({});

    const activeQuestion = questions[activeQuestionIndex];

    const {question, answer, hint, id} = activeQuestion || {};

    const showPrev = activeQuestionIndex > 0;
    const showNext = activeQuestionIndex < questions.length - 1;


    useEffect(()=> {




          const hintArray = hint.split('');

          Object.keys(answerGivenByUser).forEach((key)=> {
                const val = answerGivenByUser[key];
                hintArray[key] = val;
          });

         const finalAnswer = hintArray.join("");
         if(finalAnswer.toLocaleLowerCase() === answer) {
            setScore(score+1);
            const oldQuestions = structuredClone(questions);
            oldQuestions[activeQuestionIndex].isAnswered = true;
            setQuestions(oldQuestions);
            alert('You are Right.');
         }



    },[answerGivenByUser]);

    function handlePrev() {
        if(activeQuestionIndex === 0) {
            return;
        }
        setActiveQuestionIndex(activeQuestionIndex - 1);
        setAnswerGivenByUser({});


    }

    function handleNext() {
        if(activeQuestionIndex === questions.length -1) {
            return;
        }
        setActiveQuestionIndex(activeQuestionIndex + 1);
        setAnswerGivenByUser({});
    }

    function handleKeyPress(key) {
        console.log('Key PRessed', key);
    }

    function handleInput({index,value}) {
       
        if(answerGivenByUser[index]?.length > 1) {
            return;
        }
       const oldInfo = structuredClone(answerGivenByUser);
       oldInfo[index] = value;

        setAnswerGivenByUser(oldInfo)
    }

   
    console.log({id});



    return <div>
        <div className="hint-score">
             <Hint id={id}  handleInput={handleInput} answerGivenByUser={answerGivenByUser} hint={hint} />
            <ScoreBoard score={score}  />
        </div>
        <Controller showPrev={showPrev} showNext={showNext} handleNext={handleNext} handlePrev={handlePrev} question={question} />
        <Keybaord handleKeyPress={handleKeyPress} />
    </div>
}

export default WordGuessingGame;