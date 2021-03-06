import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import MainImage from '../../components/content/main-image.js';
import classAbroad from '../../components/assets/class-abroad.jpg';
import classLife from '../../components/assets/class-life.jpg';
import classCorporate from '../../components/assets/class-corporate.jpg';
import classExams from '../../components/assets/class-exams.jpg';
import classIndividual from '../../components/assets/class-individual.jpg';
import classWork from '../../components/assets/class-work.jpg';
import classHome from '../../components/assets/class-home.jpg';
import EnglishForLife from './english-for-life.js';

import EnglishForWork from './english-for-work';
import EnglishForExams from './english-for-exams';
import CoporateEnglish from './corporate-english';
import IndividualLessons from './individual-lessons';
import StudyAbroad from './study-abroad';
import ClassesHome from './english-classes-home.js';


const Menu = styled.div`
   
   display: grid;
   padding: 10px;
   margin: 0 auto;
   align-content: space-between;
   justify-content: space-around;
   margin-top: 10px;
   grid-gap: 10px;
   
   background: #e0dbdb;
   color: white;
   grid-template-columns: minmax(140px, max-content)
                       repeat(auto-fill, 140px);
`;

const MenuItem = styled.div`
     padding: 2px;
     color: black;
     text-align: center;
     border-bottom: 2px #e0dbdb solid;
     &:hover {
      border-bottom: 2px rgb(80, 200, 235) solid;
      transition: 0.5s; /* delays for 1 second */
      -webkit-transition: 0.5s; /* for Safari & Chrome */	
       cursor: pointer;
     }
`;


class MenuBar extends React.Component {

  constructor(props) {
	  super(props);
	  this.state = {
	  	mainPictures: [
				classHome,
				classLife,
				classWork, 
				classExams,
				classCorporate,
				classIndividual,
				classAbroad
			],
	  	menuItems: ['English classes', 
	  							'English for Life',
	  							'English for work',
	  							'English for exams',
	  							'Corporate English',
	  							'Individual lessons',
	  							'Study abroad'
	  	          ],
	   mainText: ['How good is your English?', 
	  							'English for Life',
	  							'English for work',
	  							'English for exams',
	  							'Corporate English',
	  							'Individual lessons',
	  							'Study abroad'
	  	          ],
	    phrase: 'How good is your English?',
	    image: classHome,
	    classType: 0

	  };
	  this.menuItem = this.menuItem.bind(this)
  }

  menuItem(e){
  	const phrase = this.state.mainText[e];
  	const image = this.state.mainPictures[e]
  	this.setState({classType: e})
  	this.setState({phrase})
  	this.setState({image})
  }

  componentWillMount(){
  	this.setState({phrase: 'How good is your English?'})
  }

  render(){
  
  let content = null
  switch(this.state.classType){
    case 0:
     content = <ClassesHome />
    break;
    case 1:
     content = <EnglishForLife />;
    break;
    case 2:
     content = <EnglishForWork />;
    break;
    case 3:
     content = <EnglishForExams />;
    break;
    case 4:
     content = <CoporateEnglish />;
    break;
    case 5:
     content = <IndividualLessons />;
    break;
    case 6:
     content = <StudyAbroad />
    break;
    default: 
      content = <ClassesHome />

  }


  return (	
  <div>

  <Menu>
    { this.state.menuItems.map((item, index)=> <MenuItem key={`${index}-menu`} onClick={(e)=> this.menuItem(index)} >{item}</MenuItem>)}
    </Menu>
    <MainImage  text={this.state.phrase} image={this.state.image} /> 
    {content}
  </div>
  )
}

}

export default MenuBar