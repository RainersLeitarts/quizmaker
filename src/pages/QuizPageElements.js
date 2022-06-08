import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: aliceblue;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1e1e1e;
    flex-direction: column;

    @media screen and (max-width: 600px){
        height: 100%;
    }
`

export const Question = styled.div`
    width: 86%;
    max-width: 600px;
    background-color: wheat;
    padding: 20px 20px 20px 20px;
    background-color: #404041;
    border-radius: 5px;
    border: 2px solid #FF9999;
    transition: all 0.3s;

    @media screen and (max-width: 600px){
        border-color: transparent;
    }
`

export const QuetionTitle = styled.h1`
    color: #FF9999;
    font-size: 27px;
    margin: 0 5px 20px 5px;
`

export const Choices = styled.div`
    width: 100%;
`

export const Choice = styled.div`
    width: 100%;
    margin-bottom: 5px;
    border-radius: 5px;
    cursor: pointer;
    border: 2px solid #404041;
    color: #FF9999;
    background-color: #1e1e1e;
    transition: all 0.3s;
    display: flex;
    align-items: center;

    &:hover{
        background-color: #FF9999;
        color: white;
    }
`

export const ChoiceText = styled.p`
    font-size: 20px;
    margin-left: 20px;
    margin-right: 20px;
`

export const Score = styled.h1`
    color: #FF9999;
`

export const QuestionNumber = styled.p`
    font-weight: 600;
    color: #FF9999;
    margin: 0;
    margin-left: 7px;
    margin-bottom: 7px;
`