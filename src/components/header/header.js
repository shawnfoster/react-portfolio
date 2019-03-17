import React, { Component } from 'react';
import './header.css';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <header id="home">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
            <div class="container">
                <div class="navbar-translate">
                    <div className="navbar-brand" to="/">
                        UX/UI Developer
                    </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <p>Home</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <p>Process</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <p>Projects</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <p>About Me</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        <p>Testimonials</p>
                    </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                        <p>Contact</p>
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
        <div className="row banner">
        <div className="banner-text">
            <h1 className="responsive-headline">I am {resumeData.name}.</h1>
            <h3>I am a {resumeData.role}.{resumeData.roleDescription}
            </h3>
            <hr/>
            <ul className="social">
                {
                resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                    return(
                            <li key={item.name}>
                            <a href={item.url} target="_blank"><i className={item.className}></i></a>
                            </li>
                        )
                        }
                )
                }
            </ul>
        </div>
        </div>

        <p className="scrolldown">
        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
      </React.Fragment>
    );
  }
}



















// import React from 'react';
// import './NavBar.css';
// import {Link} from 'react-router-dom';

// function NavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
//         <div class="container">
//             <div class="navbar-translate">
//                 <Link className="navbar-brand" to="/">
//                     UX/UI Developer
//                 </Link>
//                 <ul class="navbar-nav">
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                             <p>Home</p>
//                         </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                             <p>Process</p>
//                         </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                             <p>Projects</p>
//                         </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                             <p>About Me</p>
//                         </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                         <p>Testimonials</p>
//                     </a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link" href="#">
//                         <p>Contact</p>
//                     </a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     </nav>
//   );
// }

// export default NavBar;


