import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PictureLeftTextRight from '../../components/content/picture-text.js';
import picture from '../../components/assets/qTeachers.jpg'

const data = {
  title: '',
  paragraphs: [
    'Each teacher at CCI English is dedicated to education, beginning with their own studies. All of our teachers are qualified to teach English with a university degree, a state teaching license or an internationally recognized English teaching certificate.',
'At CCI, we use our expertise as Cambridge University certified teacher trainers to select only the best teachers for your classes.',
'When you enroll for classes with us, you are guaranteed a friendly, professional teacher who knows how to use modern English teaching strategies to help you meet your goals.'
  ],
  buttonText:'Meet out staff',
  buttonLink: 'connect',
  // Text is 'right'
  //format: ['right','left'],
  format: ['left','right'],
  background: 'white'
}


const LearnFromQualifiedTeachers = () => (
    <div>
    <h1 style={{textAlign:'center'}} >Learn from qualified teachers</h1>
    <PictureLeftTextRight picture={picture} data={data} />
  </div> 

)

export default LearnFromQualifiedTeachers




