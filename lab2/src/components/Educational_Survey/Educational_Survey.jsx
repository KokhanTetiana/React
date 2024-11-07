import React from 'react';
import { useState } from 'react';
import useStepper from '../../hooks/useStepper';
import './Educational_Survey.css';

function Survey() {
    const maxSteps = 5;
    const { currentStep, next, prev, reset } = useStepper(0, maxSteps);
   
    const questions = [
        {
            question: "Ви задоволені викладанням навчальних предметів?",
            answers: ['Так', 'Ні', '50/50']
        },
        {
            question: "Чи будете рекомендувати наш університет друзям?",
            answers: ['Так', 'Ні', '50/50']
        },
        {
            question: "Чи хотіли б ви більше вибіркових дисциплін?",
            answers: ['Так', 'Ні', '50/50']
        },
        {
            question: "Чи достатня кількість англійської на тиждень?",
            answers: ['Так', 'Ні', '50/50']
        },
        {
            question: "Чи допомагають вам навчальні предмети у житті?",
            answers: ['Так', 'Ні', '50/50']
        }
        
    ];

    const [answers, setAnswers] = useState(Array(maxSteps).fill(null));

    const handleAnswer = (answer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentStep] = answer;
        setAnswers(updatedAnswers);
        next();
    };


    return (
        <div className='survey-container'>
            <h2> Запитання {currentStep + 1} з {maxSteps}</h2>
            
            <div>
                <p>{questions[currentStep].question}</p>
                {questions[currentStep].answers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswer(answer)}>
                        {answer}
                    </button>
                ))}
            </div>
            
            <div className='button-group'>
                <button onClick={prev} disabled={currentStep === 0}>
                    Попереднє
                </button>
                <button onClick={next} disabled={currentStep === maxSteps - 1}>
                    Наступне
                </button>
                <button onClick={reset}>
                    Скинути
                </button>
            </div>
        </div>
    );
}

export default Survey;