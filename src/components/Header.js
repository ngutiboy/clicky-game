import React, {Component} from 'react';

class Header extends Component{
 render() {
   return (
       <header className="myHeader">
           <div className="container">
               <a className='link' href='/clickygame'><h2>Play The Game! </h2></a>
               <h2>{this.props.guess}</h2>
               <h2>Score Board = {this.props.score} | Highest Score = {this.props.highscore}</h2>
           </div>
       </header>
   )
 }
}

export default Header;