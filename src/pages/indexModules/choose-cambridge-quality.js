import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import PictureLeftTextRight from '../../components/content/picture-text.js';
import picture from '../../components/assets/cambridgeUni.png'


const data = {
  title: 'Choose Cambridge quality',
  paragraphs: [
    'CCI English is the only school in Israel authorized to be a Cambridge University teaching qualifications center. That means that CCI English is assessed for quality by Cambridge English multiple times each year.',
'With our internationally recognized expertise you are sure to get the highest quality English lessons you can find in Israel. Choose Cambridge University quality with CCI English.'
  ],
  buttonText:'Contact us about classes',
  buttonLink: 'connect',
  // Text is 'right'
  //format: ['right','left'],
  format: ['right','left'],
  background: '#f3f3f3'
}

const ChooseCambridgeQuality = () => (
  <div>
    <PictureLeftTextRight picture={picture} data={data} />
  </div>  
)

export default ChooseCambridgeQuality



