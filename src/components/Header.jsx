
import React from 'react'
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'//+
import styled from 'styled-components'
import logo from '../assets/logo.png';

export default function Header(props) {

    const navigate = useNavigate(); // Define navigate variable//+
    return (
        <Container className='flex a-center j-between'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={()=>navigate(props.login ? "/login":"/signup")}>
                {props.login ? "Log In" : "Sign In"}
            </button>
        </Container>
    );
}

const Container = styled.div`//+
    // 
    // 
    padding: 0 4rem;
    .logo{
        img{
            height: 5rem;
        }
    }
        button {
            padding: 0.5rem 1rem;
            background-color: #e50914; 
            border: none;
            cursor: pointer;
            color: #fff;
            border-radius: 0.2rem;
            font-widget: border;
            font-size: 1.05rem;
        }
`;
