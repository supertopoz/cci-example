import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import camUni from '../../components/assets/cambridgeUni.png'
import mainPic from '../../components/assets/mainPageImage.jpg'

const Wrapper = styled.div`
  display: grid;
  margin-top: 2px;
`;

const MainImageHolder = styled('img')`
  width: 100%;
`;

const Heading = styled('h1')`
  margin-top: -15px;
  margin-bottom: -15px;
  @media (max-width: 599px) {
    font-size: 25px;
    }
`;

const Text = styled('p')`
  margin-top: 20px;
  line-height: 20px;
  margin-bottom: -15px;
  @media (max-width: 599px) {
  	line-height: 15px;
  	margin-bottom: -15px;
    font-size: 12px;
    }
`;

const HeadingBanner = styled.div`

    position: absolute;

    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255, 0.8);
    text-align: center;
    padding:20px;
    width: 85%;
    @media (max-width: 599px) {
      top:15rem;
      padding-top: -30px;
    }
    @media (min-width: 600px) { top 20rem}
    @media (min-width: 900px) { top: 25rem;}
    @media (min-width: 1200px) { top: 25rem;}
    @media (min-width: 1800px) { top: 25rem;}



`;

const MainImage = () => (
  <Wrapper>
    <MainImageHolder src={mainPic} alt="main image"/>
    <HeadingBanner>
    <Heading>How good is your English?</Heading>
    <Text>Choose the highest quality English language experience with CCI English</Text>
    </HeadingBanner>
  </Wrapper>
)

export default MainImage