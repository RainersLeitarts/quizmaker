import React, { useState } from 'react'
import { Choice, Choices, ChoiceText, Question, QuestionNumber, QuetionTitle, Score, Wrapper } from './QuizPageElements'
import { questions } from '../data/questions'
import Card from '../components/Card/Card'

const shuffle = (array) => {
    array.sort(() => Math.random() - 0.5);
}

shuffle(questions);


const QuizPage = () => {
    const [questionId, setQuestionId] = useState(0)
    const [score, setScore] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [correct, setCorrect] = useState()
    const [last, setLast] = useState(false)

    const question = questions[questionId]
    const choices = question.choices

    console.log(choices)

    shuffle(choices)


    const handleClick = (choice) => {
        const answer = questions[questionId].answer
        if (choice === answer) {
            setCorrect(true)
            setScore(oldScore => {
                return oldScore + 1
            })
        } else {
            setCorrect(false)
        }

        setShowResult(true)

    }

    const nextQuestion = () => {
        if (last) {
            window.location.reload(true)
        }

        if (questionId + 2 === questions.length) {
            setLast(true)
        }


        setShowResult(false)
        setQuestionId(lastQuestionId => {
            return lastQuestionId + 1
        })

    }

    return (
        <Wrapper>
            <Score>Punkti: {score} / {questions.length}</Score>
            <Question>
                <QuestionNumber>Jautājums: {questionId + 1} / {questions.length}</QuestionNumber>
                <QuetionTitle>{question.question}</QuetionTitle>
                { }
                <Choices>
                    {choices.map(choice => {
                        return (
                            <Choice onClick={() => { handleClick(choice.id) }}>
                                <ChoiceText>{choice.choice}</ChoiceText>
                            </Choice>
                        )
                    })}
                </Choices>
            </Question>
            {showResult && <Card last={last} answer={choices.find(choice => choice.id === question.answer).choice} correct={correct} handleClick={nextQuestion} />}
        </Wrapper>
    )
}

export default QuizPage