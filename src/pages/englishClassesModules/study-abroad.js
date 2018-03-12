import React from 'react'
import Link from 'gatsby-link'
import PictureLeftTextRight from '../../components/content/picture-text.js';
import PictureRightTextLeft from '../../components/content/picture-text.js';
import PictureGallaryText from '../../components/content/picture-gallery-text.js'

import picture1 from '../../components/assets/englishClassesStudyAbroad1.jpg';
import picture2 from '../../components/assets/englishClassesStudyAbroad2.jpg';
import picture3 from '../../components/assets/englishClassesStudyAbroad3.jpg';
import picture4 from '../../components/assets/englishClassesStudyAbroad4.jpg';
import picture5 from '../../components/assets/englishClassesStudyAbroad5.jpg';
import picture6 from '../../components/assets/englishClassesStudyAbroad6.jpg';
import picture7 from '../../components/assets/englishClassesStudyAbroad7.jpg';
import picture8 from '../../components/assets/englishClassesStudyAbroad8.jpg';
import picture9 from '../../components/assets/englishClassesStudyAbroad9.jpg';

import picture10 from '../../components/assets/englishClassesStudyAbroad10.jpg';
import picture11 from '../../components/assets/englishClassesStudyAbroad11.jpg';


const data1 = {
	title: 'An all-inclusive trip',
	paragraphs: [
	'Our main goal at CCI English is to help you learn English in the best way possible. To this end, we provide you with all of the most important information before you leave on your study abroad trip.',
	'We can help you arrange group classes of all sorts, private lessons, sight-seeing trips, accommodation, meals and more. We make it our mission to help you decide on the school and location that fit your English needs, personality and budget.',
	'You\'ll know the cost of everything you purchase from us before you leave. Our knowledgeable study abroad advisors will make sure of it. That way you can focus on making the most out of your trip without worrying about unexpected expenses.'
	],
	buttonText:'Contact an advisor',
	buttonLink: 'connect',
	// Text is 'right'
	//format: ['right','left'],
	format: ['left','right'],
	background: '#f3f3f3'
}

const pictures = [
            picture1,
            picture2,
            picture3,
            picture4,
            picture5,
            picture6,
            picture7,
            picture8,
            picture9
            ]

const data2 = {
  title: 'The best schools in every country',
  paragraphs: [
        'A study abroad trip is an important investment of your time and money, so choose the best locations and the best schools for your trip. CCI English has a wide network of study abroad locations in the the United States, Canada, United Kingdom, Ireland, Malta and Australia.',
        'Our partner schools choose only the best locations for their schools and best teachers for their classes, so you will have excellent classes and an amazing experience while you are abroad. You can choose from General English, Business English, Exam Preparation, University Preparation and more and be confident that you will have the best course possible.',
        'All of CCI\'s staff is well educated and well traveled, so our advisors are ready to listen to you regarding what type of experience you want, and to help you choose the school and city that are right for you.',
        
  ],
  buttonText:'Meet our team',
  buttonLink: 'connect',
  caption: '',
  // Text is 'right'
  //format: ['right','left'],
  format: ['left','right'],
  background: 'white',
  pictures: pictures
} 

const data3 = {
	title: 'The experience of a lifetime',
	paragraphs: [
	'Your study abroad trip can be the experience of a lifetime. You\'ll take classes, of course, but you\'ll also do so much more. You will visit faraway places, see beautiful architecture, visit interesting museums, taste food and drinks from around the world, meet people from other countries, and make friends from varying backgrounds.',
	'Part of your learning will take place in the classroom, while the other part will happen out in the world, with the people you will meet and befriend, in the places you will one day call your second home.',
	'This is why choosing the details of your study abroad trip is so important, and why we provide free meetings to study abroad applicants. We want to make sure you choose the right program to make your trip worth remembering. Take your first step and schedule your free meeting with one of our advisors today.'
	],
	buttonText:'Schedule your meeting',
	buttonLink: 'connect',
	// Text is 'right'
	format: ['right','left'],
	//format: ['left','right'],
	background: '#f3f3f3'
}



const CorpoeateEnglishClasses = () => (
  <div>
    <PictureGallaryText data={data2}/>
    <PictureLeftTextRight picture={picture10} data={data1} />
    <PictureRightTextLeft picture={picture11} data={data3} />
  </div>
)

export default CorpoeateEnglishClasses