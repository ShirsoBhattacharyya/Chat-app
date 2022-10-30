import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container=styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    height: 100vh;
    align-items: center;
    background-color: #1A1A1D;
`;
const Wrapper=styled.div`
    width: 20%;
`;
const Title=styled.h1`
    color: white;
    font-size: 2.5em;
    padding-bottom: 10px;
    border-bottom: 2px solid white;
`;
const InputContainer=styled.div``;
const Input=styled.input`
    border-radius: 0;
    padding: 15px 20px;
    width: 100%;
`;
const Button=styled.button`
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #2979FF;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
    margin-top:20px;
`;

const Home = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <Container>
            <Wrapper>
                <Title>Join</Title>
                <InputContainer>
                    <Input type='text' placeholder='Name' onChange={(e)=>{setName(e.target.value)}} required/>
                </InputContainer>
                <InputContainer style={{marginTop:20}}>
                    <Input type='text' placeholder='Room' onChange={(e)=>{setRoom(e.target.value)}} required/>
                </InputContainer>
                <Link to={`/chat?name=${name}&room=${room}`} >
                    <Button type='submit' onClick={(e)=>e.preventDefault}>Sign In</Button>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Home
