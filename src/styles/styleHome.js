import styled from "styled-components";

export const Home = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFFFFF;
`;

export const Header = styled.header`
    height: 15%;
    width: 100%;
    background-color: #0070AD;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 2.5rem;
        font-weight: bold;
        color: #CDCABC;
    }
`;

export const Main = styled.main`
    height: 72%;
    width: 75%;
    background-color: #ECECEC;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    color: #CDCABC;

`;

export const Card = styled.div`
    width: 20%;
    height: 60%;
    background-color: #62AFD9;
    color: black;
    cursor: pointer;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        font-size: 2rem;
        font-weight: bold;
    }

    :hover {
        
        color: white;
        box-shadow: 10px 10px 2px #aaaaaa;
    }
`;

export const CardDesafios = styled.div`
    width: 32%;
    height: 80%;
    background-color: #62AFD9;
    color: black;
    border-radius: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .enunciado {
        
        width: 80%;
        height: 25%;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
    }
    input {
        width: 80%;
        height: 6%;
        margin-bottom: 4%;
        border-radius: 9px;
        text-align: center;
        font-weight: bold;
        font-size: 1.2rem;
    }

    .buttons {
        width: 80%;
        height: 9%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            height: 90%;
            width: 48%;
            border-radius: 6px;
        }
    }
`
export const CardDesafiosRespostas = styled.div`
    width: 60%;
    height: 80%;
    background-color: #62AFD9;
    color: black;
    border-radius: 5%;
    display: flex;
    align-items: center;
    justify-content: center;

    li{
        text-align: right;
        list-style: none;
        font-size: 1.2rem;
        font-weight: bold;
    }

    .password-resposta {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 95%;
        height: 90%;

        font-size: 1.5rem;
        
        span {
            text-align: center;
        }

        li {
            font-size: 1rem;
            list-style: disc;
            text-align: justify;
        }
    }
`