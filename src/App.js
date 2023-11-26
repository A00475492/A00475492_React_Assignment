import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import MyTown from './MyTown';

function Home() {
  return (
    <div>
      <Link to="/mytown">Go to My Town</Link>
      <l1>
        <h1>
          THIS IS MAIN
        </h1>
      </l1>
      <h3>Home</h3>
      <p>My Name : Pranay Malusare</p>
      <h3>About Yourself</h3>
      <p>
      Hello there, I'm Pranay I am pursuing my master's degree in computing and data analytics at Saint Mary's University. I finished my undergraduate in May 2023 from I2IT College in Pune, India with a CGPA of 8.7.  I chose to continue my education instead of entering the professional working field because I wanted to explore all the possibilities of the IT field. I believe that I can gain a deeper understanding of the IT field by studying further and gaining more experience. I am passionate about computers and technology, and I am confident that I can excel in this field of study. I am looking forward to starting my master's degree at Saint Mary's University.  
      </p>
      <h3>Why did I choose MCDA program ?</h3>
      <p>I chose to do the MCDA Program because it focuses on software design and data analytics, two topics that I am deeply interested in. I am also confident that the program will help me to develop my skills and provide me with the opportunity to gain valuable work experience.Additionally, the program is taught by experienced faculty with real-world experience. I am confident that I will learn a great deal and make the most of my educational experience.</p>
      
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mytown" element={<MyTown />} />
      </Routes>
    </Router>
  );
}

export default App;
