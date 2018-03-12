import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import MainImage from '../components/content/main-image.js';
import TalkToUs from '../pages/indexModules/talk-to-us.js'
import ChooseCambridgeQuality from '../pages/indexModules/choose-cambridge-quality.js'
import LernFromQualifiedTeacher from '../pages/indexModules/learn-from-qualified-teachers.js'
import RelaxWhileYouLearn from '../pages/indexModules/relax-while-you-learn.js'
import picture from '../components/assets/mainPageImage.jpg';

const IndexPage = () => (
  <div>
    <MainImage  text={'How good is your English?'} image={picture} /> 
    <TalkToUs />
    <ChooseCambridgeQuality />
    <LernFromQualifiedTeacher />
    <RelaxWhileYouLearn />
  </div>
)

export default IndexPage
