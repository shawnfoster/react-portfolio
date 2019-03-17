import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-md-8 mr-auto ml-auto text-center">
                    <h1>Process</h1>
                    <h4 class="description">Ask.Answer.Repeat.</h4>
                </div>
                <div class="row">
            <div class="col-md-4">
                <div class="info">
                                          
                    <h4 class="info-title">User Interviews & Surveys</h4>
                    <p class="description">Talking to people and gathering data to help me understand the problem or discover new ones.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info">
                    <div>
                        
                    </div>
                    <h4 class="info-title">Mapping & Ideation</h4>
                    <p class="description">This is when connections are starting to form and ideas start to take shape.</p>
                </div>
            </div>
            <div class="col-md-4">
                <div class="info">
                    <div>
                            
                    </div>
                    <h4 class="info-title">Competitive Analysis</h4>
                    <p class="description">Before a product or company can move in any direction they need to know where the stand and where they are going.</p>
                </div>
            </div>
            <div class="col-md-4">
                    <div class="info">
                        <div>
                            
                        </div>
                        <h4 class="info-title">Sketching & Wireframes</h4>
                        <p class="description">Creating low fidelity sketches and wireframes helps to understand and discover problems early and solve them quickly with little cost.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info">
                        <div>
                            
                        </div>
                        <h4 class="info-title">Architecture & User Flows</h4>
                        <p class="description">Group into logical pillars. Map out product features for each pillar to identify gaps, opportunities, and feature bloat.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="info">
                        <div>
                            
                        </div>
                        <h4 class="info-title">Prototyping & User Testing</h4>
                        <p class="description">Increasing the fidelity and creating interactivity allowing me to capture user behavior, pain points, motivations, and needs from contextual inquiries.</p>
                    </div>
                </div>
        </div>
            </div>
        </div>
    );
  }
}
