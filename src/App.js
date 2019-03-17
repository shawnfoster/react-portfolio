import React, { Component } from 'react';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Process from './components/process/process';
import Projects from './components/projects/projects';
// import Testimonials from  './components/testimonials/testimonials';
// import About from './components/about/about';
// import ContactUs from './components/contactus/contactus';
import Footer from './components/footer/footer';
import resumeData from './resumeData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <Header resumeData={resumeData}/>
        <Process resumeData={resumeData}/>
        <Projects resumeData={resumeData}/>
        {/*<Testimonials resumeData={resumeData}/>
        <About resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/> */}
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

export default App;