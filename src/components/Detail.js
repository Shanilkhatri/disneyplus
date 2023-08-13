import React from 'react'
import styled from 'styled-components'

 
function Detail() {
  return (
    <Container>
        <Background>
            <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/42A0F55740AE28358980B7EE44E2218F00F6BC720FD0A88CE287D7575F0D0965'/>
        </Background>
        <ImageTitle>
            <img src='/images/bao-logo.png'/>
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src='/images/play-icon-black.png'/>
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src='/images/play-icon-white.png'/>
                <span>TRAILER</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupButton>
                <img src='/images/group-icon.png'/>
                {/* <span>TRAILER</span> */}
            </GroupButton>
        </Controls>
        <SubTitle>
            {/* for the · do Alt + 0 1 8 3 and release */}
            2018 · 7m · Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
        Dummy text, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`
const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;
    img{
        width: 100%;
        height: 100%;
       
    }
`
const ImageTitle = styled.div`
    height: 30vh;
    min-height: 170px;
    min-width: 200px;
    width: 35vw;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const Controls = styled.div`
    display: flex;
    align-items: center;

`
const PlayButton = styled.button`
    cursor: pointer;
    border-radius: 4px;
    font-size: 15px;
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb(249,249,249);
    border: none;

    &:hover{
        background: rgb(198,198,198);
    }
`
const TrailerButton = styled(PlayButton)`
    background: rgba(0,0,0,0.3);
    border: 2px solid rgba(249,249,249,0.8);
    color: rgb(249,249,249);

`
const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;
    span{
        font-size: 30px;
        color: white;
    }

`
const GroupButton = styled(AddButton)`
    background-color: rgba(0,0,0,0.9);
`
const SubTitle = styled.div`
    padding: 15px 0;
    font-size: 17px;
    color: rgba(249,249,249,0.8);
    `
const Description = styled.div`
    font-size: 20px;
    line-height: 1.4;
    color: rgb(249,249,249);
    max-width: 60vw;
`