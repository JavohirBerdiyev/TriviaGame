import React, { useEffect, useState } from 'react'

const quesArr = [
    {
        question: "O'zbekiston nechanchi yili mustaqil bo'lgan",
        choises: [
            { text: "1990 yil", correct: false },
            { text: "1991 yil", correct: true },
            { text: "1992 yil", correct: false },
            { text: "1993 yil", correct: false },
        ],
    },
    {
        question: "2 ga 2 ni qo'shsak necha bo'ldi ",
        images: "",
        choises: [
            { text: "5 bo'ladi", correct: false },
            { text: "8 bo'ladi ", correct: false },
            { text: "2 ga 2 ni qo'shib bo'lmaydi", correct: false },
            { text: "4 bo'ldi ", correct: true },
        ],
    },
    {
        question: "Ikkichi jahon urushi nechanchi yilda boshlangan",
        choises: [
            { text: "1945 yil", correct: false },
            { text: "1918 yil", correct: false },
            { text: "1939 yil", correct: true },
            { text: "1943 yil", correct: false },
        ],
    }
]

function Questions() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [testOver, setTestOver] = useState(false);

    function handleAnswerClick(answer) {
        console.log(answer);
        if(answer.correct) {
            setScore(score + 1);
        }

        if(currentQuestionIndex === quesArr.length - 1) {
            setTestOver(true);
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    }

    const currentQuestion = quesArr[currentQuestionIndex];
    const shuffleAnswer =  shuffle(currentQuestion.choises);

    if(testOver) {
        return (
            <div>
                <h1>Test Over!</h1>
                <p>Your score: {score}</p>
            </div>
        )
    }
  return (
    <div>
        <h1>Question {currentQuestionIndex + 1 }</h1>
        <ul>
            {shuffleAnswer.map((answer, index) => (
                <li key={index}>
                    <button onClick={() => handleAnswerClick(answer)}>{answer.text}</button>
                </li>
            ))}
        </ul>
        <p>score: {score}</p>
    </div>
  )
}


function shuffle(arr) {
    let currentIndex = arr.length;
    let a;
    let b;

    while (currentIndex !== 0 ) {
        b = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        a = arr[currentIndex];
        arr[currentIndex] = arr[b];
        arr[b] = a;
    }
    return arr;
}

export default Questions;