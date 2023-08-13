import React from 'react'
import styled from 'styled-components'
// for all the images go here -> prod-ripcut-delivery.disney-plus
function Movies() {
  return (
    <Container>
       <h4>Recommended for you</h4>
       <Content>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/B54995FECE2A8C80ECD759D93713CB1D18CD1A85C4608B7809DA1A307B4F55E9/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://i.pinimg.com/1200x/7b/b5/3d/7bb53dbcf8429535226f4df3d154213c.jpg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F2B51BB4DEDC534A857C6048A274100C6DAEF1C30EBA488443DEAE3040DC2C7D/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/F2C7A5C91AC7447AB1CA922EA9FF8511E9C16E573EEAF77E25000F0011BE84F0/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/03268262499357BEC39BA3EA06BD736FC9786EC0B03ED94221B12F9A24CD6606/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/59C932D384BF61C0E4C82C25A0D61D4F4F2958CCB07A20E8495F5DA9C8A28AC3/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EF0CFC8543B106F47CA87266D1A81515DFE7153F46480D753FE412E99CB3C88/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
            <Wrap>
                <img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/FD468A77156137B47E9F6EBF124A4392888F6D367CE1AE6FF5344CB58BB939B1/scale?width=1200&aspectRatio=1.78&format=jpeg'/>
            </Wrap>
       </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`
const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    border: 3px solid rgba(249,249,249,0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);
    }
`