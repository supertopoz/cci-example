import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import camUni from '../../components/assets/cambridgeUni.png'
import GreenButton from './green-button.js'
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

let Wrapper = styled.div`${wrapperStyle}`
let PictureBlock = styled.div``;
let TextBlock = styled.div``;

const Pic = styled('img')`
  width: 100%;
`;

class PictureLeftTextRight extends React.Component {
   
   constructor(props){
     super();
   }

   componentWillMount(){
     const format = this.props.data.format;
     TextBlock = styled.div`
       padding: 20px;
       grid-auto-columns: auto;
       grid-area: cam-${format[0]};
    `;

    PictureBlock = styled.div`
      align-self : center;
      grid-auto-columns: auto;
      grid-area: cam-${format[1]}
    `;   
    Wrapper = styled.div`${wrapperStyle} background:${this.props.data.background};`
   }

   render(){
   const left = <PictureBlock><Pic src={this.props.picture} alt="cambridge University" /></PictureBlock>

   const right = (

    <TextBlock>
    <h1 style={{textAlign:'center'}}>{this.props.data.title}</h1>  
    <div> 
     { this.props.data.paragraphs.map((text, index)=> <p key={`${index}-text`}>{text}</p>) } 
    </div>
    <GreenButton text={this.props.data.buttonText} />
    </TextBlock>
    )
    return( <Wrapper> {left}{right}</Wrapper> )
   }
}

export default PictureLeftTextRight