import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div class="container">
      <div class="row">
        <div class="twelve columns">
          <ul class="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
          <ul className="copyright">
            <li>© Copyright 2019 Shawn Foster</li>
            <li>Design by <a title="Styleshout" href="#">Shawn Foster</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
      </div>
    </footer>
    );
  }
}
