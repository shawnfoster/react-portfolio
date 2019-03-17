import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      {/*generated code*/}
      <header>
        <div className="row banner container">
            <div className="banner-text">
                <h1 className="responsive-headline">{resumeData.name}.</h1>
                <h3>I am a {resumeData.role}</h3>
                <h3>{resumeData.roleDescription}</h3>
                <hr/>
                <ul className="social">
                    {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                        return(
                                <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                        </li>)}
                    )
                    }
                </ul>
                <div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>
                </div>
            </div>
        </div>
      </header>
      </React.Fragment>
    );
  }
}