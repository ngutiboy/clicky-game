import React, { Component } from "react";
import shuffle from 'shuffle-array'

import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";

import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img8 from "./images/img8.jpg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";
import img15 from "./images/img15.jpg";
import img16 from "./images/img16.jpg";
import img17 from "./images/img17.jpg";
import img18 from "./images/img18.jpg";
import img19 from "./images/img19.jpg";
import img20 from "./images/img20.jpg";
import img21 from "./images/img21.jpg";
import img22 from "./images/img22.jpg";
import img23 from "./images/img23.jpg";
import img24 from "./images/img24.jpg";
import Gallery from "./components/Gallery";
import "./App.css";

const images = [
 {
   id: 1,
   title: img1
 },
 {
   id: 2,
   title: img2
 },

 {
   id: 3,
   title: img3
 },
 {
   id: 4,
   title: img4
 },
 {
   id: 5,
   title: img5
 },
 {
   id: 6,
   title: img6
 },
 {
   id: 7,
   title: img7
 },
 {
   id: 8,
   title: img8
 },
 {
   id: 9,
   title: img9
 },
 {
   id: 10,
   title: img10
 },
 {
   id: 11,
   title: img11
 },
 {
   id: 12,
   title: img12
 },
 {
   id: 13,
   title: img13
 },
 {
   id: 14,
   title: img14
 },
 {
   id: 15,
   title: img15
 },
 {
   id: 16,
   title: img16
 },
 {
   id: 17,
   title: img17
 },
 {
   id: 18,
   title: img18
 },
 {
  id: 19,
  title: img19
},
{
  id: 20,
  title: img20
},
{
  id: 21,
  title: img21
},
{
  id: 22,
  title: img22
},
{
  id: 23,
  title: img23
},
{
  id: 24,
  title: img24
}
];

const getRandomImages = () => {
 return shuffle(images, { copy: true })
}

class App extends Component {
 state = {
   score: 0,
   highscore: 0,
   clicked: [],
   guess: "click to guess"
 };

 clickimage = (evt) => {
   let id = evt.currentTarget.dataset.pid;

   if (this.state.clicked.indexOf(id) === -1) {
     let { clicked, score, highscore } = this.state

     clicked.push(id)
     score++

     if (score > highscore) { highscore = score }

     this.setState({
       score,
       highscore,
       clicked,
       guess: "Right Guess"
     })
   } else {
     this.setState({
       score: 0,
       clicked:[],
       guess: "Wrong Guess"
     })

   }
 };

 render() {
   const images = getRandomImages();

   return (
     <div className="App">
       <Header
         guess={this.state.guess}
         score={this.state.score}
         highscore={this.state.highscore}
       />
       <Jumbotron />
       <Gallery images={images} clickimage={this.clickimage} />
       <Footer />
     </div>
   );
 }
}

export default App;