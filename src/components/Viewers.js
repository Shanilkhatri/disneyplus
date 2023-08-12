import React, { useState } from 'react';
import styled from 'styled-components';

function Viewers() {
    const [activeVideo, setActiveVideo] = useState(null);

    const playVideo = (index) => {
      setActiveVideo(index);
    };
  
    const pauseVideo = () => {
      setActiveVideo(null);
    };

  return (
    <Container>
     <Wrap onMouseEnter={() => playVideo(0)} onMouseLeave={pauseVideo}>
        <img src="/images/viewers-disney.png" alt="Disney" />
        <VideoOverlay interacted={activeVideo === 0}>
          <video autoPlay loop muted>
            <source src="/videos/disney.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoOverlay>
      </Wrap>
      <Wrap onMouseEnter={() => playVideo(0)} onMouseLeave={pauseVideo}>
        <img src="/images/viewers-marvel.png" alt="Marvel" />
        <VideoOverlay interacted={activeVideo === 0}>
          <video autoPlay loop muted>
            <source src="/videos/marvel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoOverlay>
      </Wrap>
      <Wrap onMouseEnter={() => playVideo(0)} onMouseLeave={pauseVideo}>
        <img src="/images/viewers-national.png" alt="Natgeo" />
        <VideoOverlay interacted={activeVideo === 0}>
          <video autoPlay loop muted>
            <source src="/videos/national-geographic.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoOverlay>
      </Wrap>
      <Wrap onMouseEnter={() => playVideo(0)} onMouseLeave={pauseVideo}>
        <img src="/images/viewers-pixar.png" alt="Pixar" />
        <VideoOverlay interacted={activeVideo === 0}>
          <video autoPlay loop muted>
            <source src="/videos/pixar.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoOverlay>
      </Wrap>
      <Wrap onMouseEnter={() => playVideo(0)} onMouseLeave={pauseVideo}>
        <img src="/images/viewers-starwars.png" alt="Starwars" />
        <VideoOverlay interacted={activeVideo === 0}>
          <video autoPlay loop muted>
            <source src="/videos/star-wars.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </VideoOverlay>
      </Wrap>
      
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;
  border: 3px solid rgba(249, 249, 249, 0.1);
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ interacted }) => (interacted ? 1 : 0)};
  transition: opacity 250ms ease-in-out;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: none;
    
  }

  ${Wrap}:hover & {
    video {
      display: block;
      border-radius: 9px;
    }
  }
`;
