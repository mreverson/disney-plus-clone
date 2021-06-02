import React from 'react';
import styled from "styled-components";

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <Signup>GET ALL THREE</Signup>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet dui eget interdum volutpat. Nullam dapibus fringilla eros, eget sodales massa.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
            
        </Container>
    )
}

export default Login

const Container = styled.main` 
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;
    display:flex;
    align-items: top;
    justify-content: center;
    

    &:before {
        background: url("/images/login-background.jpg") center center / cover no-repeat fixed;
        content: "";
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`

const CTA = styled.div`
    max-width: 650px;
    width: 90%;
    margin-top: 100px;
    padding: 80px 40px;
    display:flex;
    flex-direction: column;
    align-items: center;
`
const CTALogoOne = styled.img`
    margin-bottom: 15px;
`
const CTALogoTwo = styled.img`
    width: 90%;
`

const Signup = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    text-align: center;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-bottom: 15px;

    &:hover {
        background-color: #0483ee;
    }
`
const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align:center;
    line-height: 1.5;
`