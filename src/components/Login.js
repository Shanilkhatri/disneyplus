import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
        <CTA>
            <CTALogoOne src="/images/cta-logo-one.svg" />
            <SignUp>Get All There</SignUp>
            <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" />
        </CTA>
    </Container>
  )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        background-position: top;
        background-size: cover;
        background-repeat:no-repeat;
        position: absolute;
        top: 0;
        bottom: 0;
        content: "";
        left: 0;
        opacity: 0.7;
        right: 0;
        z-index: -1;
        background-image: url("/images/login-background.jpg");
    }
`

const CTA = styled.div`
    margin-top: 100px;
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CTALogoOne = styled.img`

`
const SignUp = styled.a`
    padding: 17px 0px;
    cursor: pointer;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    color: #f9f9f9;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    transition-duration: 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    &:hover{
        background-color: #0483ee;
    }
`
const Description = styled.p`
    opacity: 0.8;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
`
const CTALogoTwo = styled.img`
    width: 90%;
`