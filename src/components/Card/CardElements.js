import styled from 'styled-components'

export const BackgroundCover = styled.div`
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(10px);

    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
 
    @media screen and (max-width: 600px){
        height: 100%;
    }

`

export const Wrapper = styled.div`
    position: absolute;
    z-index: 1001;
    width: 90%;
    max-width: 500px;
    background-color: #404041;
    margin-bottom: auto;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    border-radius: 5px;
    border: 2px solid;
    border-color: ${props => props.correct ? '#a7ffa4' : '#fb6767'};
`

export const Button = styled.button`
    padding: 0 10px;
    height: 50px;
    background-color: #1e1e1e;
    cursor: pointer;
    border: 2px solid;
    border-color: ${props => props.correct ? '#a7ffa4' : '#fb6767'};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    margin-top: 40px;
    
    &:hover{
        background-color: #404041;
        color: white;
    }
    
`

export const ButtonText = styled.p`
    color: ${props => props.correct ? '#a7ffa4' : '#fb6767'};
    font-size: 24px;
    font-weight: 600;
`

export const Result = styled.h1`
    margin: 0;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 0;
    font-size: 55px;
    color: ${props => props.correct ? '#a7ffa4' : '#fb6767'};
`

export const Text = styled.p`
    font-size: 18px;
    font-weight: 600;
    padding: 0;
    margin: 0;
    color: ${props => props.correct ? '#a7ffa4' : '#fb6767'};
`

export const Answer = styled.p`
    font-size: 22px;
    color: ${props => props.correct ? '#a7ffa4' : '#fb6767'};
    font-weight: 600;
    margin: 0 20px;
    padding: 0;
`