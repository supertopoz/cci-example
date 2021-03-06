import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import MainImage from '../components/content/main-image.js';
import picture from '../components/assets/contactusbanner.jpg'

const wrapperStyle = `
@media (max-width: 599px) {
    display: grid;
    grid-gap: 5px;
    grid-template-areas: 
      "cam-left"
      "cam-right"       
}
/*for-tablet-portrait-up*/

@media (min-width: 600px) {
    align-content: space-between;
  justify-content: space-around;
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "cam-left" 
      "cam-right"
}
/*for-tablet-landscape-up*/

@media (min-width: 900px) {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: 50% 50%;
}
/*for-desktop-up*/

@media (min-width: 1200px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "cam-left cam-right"
}
/*for-big-desktop-up*/

@media (min-width: 1800px) {
    display: grid;
    grid-gap: 2px;
    grid-template-areas: 
      "cam-left cam-right"
}
  margin-top: 10px;
  padding: 20px;
`;

let Wrapper = styled.div`${wrapperStyle}`;

let ContactFormBlock = styled.div`
  display: grid;
  grid-gap: 10px;
  align-content: center;
  justify-self: center;
`;

const InputItem = styled('input')`
  width: 20rem;
  height: 2rem;
  padding-left:5px;
  border: 1px solid #50C8EB;
  border-radius: 2px;
`;

let TextBlock = styled.div`
  padding: 20px;
  grid-auto-columns: auto;
  grid-area: cam-left;

`;

const Pic = styled('img')`
  width: 100%;
`;


class Contact extends React.Component {
  constructor(props){
    super(props)
  }



  render(){
  return (
   
  <div>

  <MainImage  text={'Contact CCI English'} image={picture} /> 
  <Wrapper> 
  <TextBlock> 
    <h1 style={{textAlign:'center'}}>Send us a message</h1> 
  <div>
  <p>Contact us with your questions about English classes. Everyone who works at our school is knowledgable about English, teaching and traveling.</p>
  <p>Our staff is happy to provide information via email, on the phone, over Skype or in person at our school. </p>
  <p>CCI English:</p>
  <ul>
    <li><p>Provides free level testing and consultations for students</p></li>
    <li><p>Can speak to you in English, Hebrew, Russian, Ukrainian, French or Spanish</p></li>
    <li><p>Has education experts that can help you decide on the best course option</p></li>
  </ul>
  </div>   
  </TextBlock>
  <ContactFormBlock>
    <label>
    First Name:<span style={{color:'red'}}>*</span>
    <br/>
    <InputItem type="text" name="name" required/>
  </label>
  <label>
    Last Name <span style={{color:'red'}}>*</span>:
    <br/>
    <InputItem type="text" name="name" />
  </label>

  <label>
    Email<span style={{color:'red'}}>*</span>:
    <br/>
    <InputItem type="text" name="name" />
  </label>

  <label>
    Phone Number<span style={{color:'red'}}>*</span>:
    <br/>
    <InputItem type="text" name="name" />
  </label>

  <label>
    Message<span style={{color:'red'}}>*</span>:
    <br/>
    <textarea type="text" name="name" />
  </label>

  <InputItem type="submit" value="Submit" />
  </ContactFormBlock>
  </Wrapper>
 <TextBlock>
 <h1 style={{textAlign:'center'}}>Call us</h1> 
  <p>In Israel: 073-769-4499</p>
  <p>Outside of Israel: +972 73-769-4499</p>
 </TextBlock>
  <TextBlock>
  <h1 style={{textAlign:'center'}}>Visit our school</h1> 
  <p>Visit our school</p>
 </TextBlock>

  </div>

   )
  }
}

export default Contact