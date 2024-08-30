import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <Links>
                    <a href="/">Audio and Subtitles</a>
                    <a href="/">Help Center</a>
                    <a href="/">Gift Cards</a>
                    <a href="/">Media Center</a>
                    <a href="/">Investor Relations</a>
                    <a href="/">Jobs</a>
                    <a href="/">Terms of Use</a>
                    <a href="/">Privacy</a>
                    <a href="/">Legal Notices</a>
                    <a href="/">Corporate Information</a>
                    <a href="/">Contact Us</a>
                </Links>
                <SocialIcons>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                </SocialIcons>
                <FooterText>© 2024 Netflix, Inc.</FooterText>
            </FooterContent>
        </FooterContainer>
    );
}

const FooterContainer = styled.div`
    background-color: #141414;
    padding: 40px 0;
    color: #757575;
    font-size: 14px;
`;

const FooterContent = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    text-align: center;
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;

    a {
        margin: 5px 15px;
        color: #757575;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

const SocialIcons = styled.div`
    margin-bottom: 20px;

    a {
        margin: 0 10px;
        color: #757575;
        font-size: 24px;
        text-decoration: none;

        &:hover {
            color: #ffffff;
        }

        svg {
            vertical-align: middle;
        }
    }
`;

const FooterText = styled.div`
    margin-top: 20px;
    color: #757575;
`;
