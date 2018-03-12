import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PictureGallaryText from '../components/content/picture-gallery-text.js'
import OurTeam from '../pages/ourSchoolModules/our-team.js'
import CambridgeGuarantee from '../pages/ourSchoolModules/cambridge-guarantee.js'
import QualityAndComfort from '../pages/ourSchoolModules/quality-comfort.js'

import ourSchool1 from '../components/assets/ourSchool1.jpg'
import ourSchool2 from '../components/assets/ourSchool2.jpg'
import ourSchool3 from '../components/assets/ourSchool3.jpg'
import ourSchool4 from '../components/assets/ourSchool4.jpg'
import ourSchool5 from '../components/assets/ourSchool5.jpg'
import ourSchool6 from '../components/assets/ourSchool6.jpg'
import ourSchool7 from '../components/assets/ourSchool7.jpg'
import ourSchool8 from '../components/assets/ourSchool8.jpg'
import ourSchool9 from '../components/assets/ourSchool9.jpg'


const pictures = 
            [
            ourSchool1,
            ourSchool2,
            ourSchool3,
            ourSchool4,
            ourSchool5,
            ourSchool6,
            ourSchool7,
            ourSchool8,
            ourSchool9
            ]

const data = {
  title: 'Our Story',
  paragraphs: [
        'CCI\'s story, like many others, began while socializing at a local bar. One night Amir, Christina & Svitlana went out to celebrate a friend\'s birthday in New York City. The three soon found that they shared a number of common interests, including English education and life in Israel. This discovery led to a light hearted conversation about opening their own school in Israel one day.',
        'They spent years traveling and working together around the world including Ukraine, Sri Lanka, and Ireland before they decided that opening their own school was something they had the knowledge, experience and passion to do.',
        'Now, all three friends are living their dream of running an English school in Tel Aviv, which is the  primary metropolitan center of the country. They\'re thrilled to be running a school modeled after their own learning philosophy - that only by practicing the language can students increase their confidence and ability to interact outside of the classroom.',
        'They love working with intelligent, motivated, fun-loving students in Israel and abroad to help them achieve their goals for English language learning.',
  ],
  buttonText:'Meet our team',
  buttonLink: 'connect',
  caption: 'CCI English founders Svitlana Bulkina, Amir Landa & Christina Kaku - Photos by Ifaa Amit',
  // Text is 'right'
  //format: ['right','left'],
  format: ['left','right'],
  background: '#f3f3f3',
  pictures: pictures
}            

const OurSchool = () => (
  <div>
  <PictureGallaryText data={data}/>
  <OurTeam style={{margin:'0 auto'}}></OurTeam>
  <CambridgeGuarantee/>
  <QualityAndComfort/>
  </div>
)

export default OurSchool