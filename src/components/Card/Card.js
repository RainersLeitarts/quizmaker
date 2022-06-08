import React from 'react'
import { Answer, BackgroundCover, Button, ButtonText, Result, Text, Wrapper } from './CardElements'

const Card = ({last, score, answer, correct, handleClick }) => {
    return (<>
        <BackgroundCover/>
    <Wrapper correct={correct}>
        <Result correct={correct}>{correct ? 'Pareizi!' : 'Nepareizi!'}</Result>
        <Text correct={correct}>Pareizā atbilde:</Text>
        <Answer correct={correct}>{answer}</Answer>
        <Button onClick={handleClick} correct={correct}>
            <ButtonText correct={correct} >{!last? 'Nākamais' : 'Vēlreiz'}</ButtonText>
        </Button>
    </Wrapper></>
        
    )
}

export default Card