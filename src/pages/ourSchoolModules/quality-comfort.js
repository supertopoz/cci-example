import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import gallary1 from '../../components/assets/gallary1.jpg'
import gallary2 from '../../components/assets/gallary2.jpg'
import gallary3 from '../../components/assets/gallary3.jpg'
import gallary4 from '../../components/assets/gallary4.jpg'
import gallary5 from '../../components/assets/gallary5.jpg'



const Wrapper = styled.div`

@media (max-width: 599px) {
    display: grid;
    grid-gap: 5px;
    grid-template-areas: 
      "cam-left"
      "cam-right"       
}
/*for-tablet-portrait-up*/

@media (min-width: 600px) {
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
    grid-template-columns: 50% 50%
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
  border-radius: 1p;
  padding: 20px;
  background:#f3f3f3;
`;

const ComfortBlurb = styled.div`

  align-self : center;
  margin-top: 10px;
  grid-gap: 5px;
  grid-auto-columns: auto;
  grid-area: cam-left;
`;

const ComfortGallary = styled.div`
  padding: 10px;
  grid-auto-columns: auto;
  grid-area: cam-right;
`;

const ContactUsAboutClassesBtn = styled.div`
  background: #a2c534;
  padding: 10px;
  text-align: center;
  width: 200px;
  margin: 0 auto;
  box-shadow: 1px 1px 1px #999;
  &:hover {
  color:white;
  background: #b7d753;
  cursor: pointer;
}
`;

const GallaryMainPic = styled('img')`
  width: 100%;
`;

const GallaryMini = styled('img')`
  width: 100px;
  margin: 2px;
`;

class QualityAndComfort extends React.Component {
  
  constructor(props) {
  super(props);
  this.state = {
  	pictures: [gallary1,gallary2,gallary3,gallary4,gallary5],
  	mainPic: gallary5
  };
  this.photoPicker = this.photopicker.bind(this)
  }

  photopicker(e){
  	console.log(e)
  	const gallary = this.state.pictures;
  	const pic = gallary[e]
  	this.setState({mainPic:pic})
  }


  render(){
	return (
  <Wrapper>
     <ComfortBlurb >
      <h1 style={{textAlign:'center'}}
	  >
	  Quality and comfort
	  </h1>  
	  <div>
	      <p>At CCI English, we speak with every new student before they enroll in classes.</p>
	      <p>Our first meeting will include an evaluation of your English level and a short interview about your English learning. We interview students and listen to them talk about their life, work, interests and goals because each student has a different situation and different needs. These meetings are always free of charge because each student deserves to know about their school and classes before they sign up.</p>
	      <p>All of our advisors are well educated, well traveled and interested in helping students reach their educational and life goals. Using the information from your interview, our advisors can recommend the best classes to suit your needs, personality and budget.</p>
	  </div>
	  <ContactUsAboutClassesBtn>Contact us about classes</ContactUsAboutClassesBtn>
    </ComfortBlurb>
    <ComfortGallary>
    <GallaryMainPic src={this.state.mainPic} alt="cambridge University" />
    <GallaryMini onClick={(e) => this.photopicker(0)} src={gallary1} alt="cambridge University" />
    <GallaryMini onClick={(e) => this.photopicker(1)} src={gallary2} alt="cambridge University" />
    <GallaryMini onClick={(e) => this.photopicker(2)} src={gallary3} alt="cambridge University" />
    <GallaryMini onClick={(e) => this.photopicker(3)} src={gallary4} alt="cambridge University" />
    <GallaryMini onClick={(e) => this.photopicker(4)} src={gallary5} alt="cambridge University" />
    
    </ComfortGallary> 
  </Wrapper>
)
}
}

export default QualityAndComfort