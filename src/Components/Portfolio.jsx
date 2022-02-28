// import logo from './logo.svg';
// import './App.css';
// import './Components/Portfolio'
import React from 'react';

class Portfolio extends React.Component{
  render (){
    return (
      <>
        <div>
            <h5>Hi, My name is</h5>
            <h1>Sofen Chowdhury.</h1>
            <h2>I build products that people will use</h2>
            <div className="width-text">
              <h9>
                I'm a growing Software Engineer, who specializes in building Android applications for best digital experiences.
                <br/>Currently I'm an SWE Intern at 
                <a href="https://github.com/"> GitHub </a> 
                focused on building impactful products which can create values in people lives. 
              </h9>
            </div> 
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="width-text2">
          <h1>
            About me 
            <hr/>
          </h1> 
          <h10>
          Hello, I am an Android Engineer with 1+ years of experience who loves solving real-world problems by developing Android apps.

I enjoy working on projects in a team full of excited people who wants to learn and grow like me and In order to keep learning new things, I am always looking for projects and opportunities that will help me learn and upskill better.

Also, I document my developer journey and learnings on Medium (with 10,000+ monthly readers) to help new developers in their journey.
          </h10> 
        </div>
      </>
    );
  }
}

export default Portfolio;
