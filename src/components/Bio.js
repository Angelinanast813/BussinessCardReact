import React, {Component} from 'react'
import "../componentStyles/Bio.css"
import "video.js"
import $ from 'jquery'
import {Link} from "react-router-dom";

class Bio extends Component {

    constructor(props){
        super(props);
        this.getindex = this.getindex.bind(this);
    }


        getindex() {
        console.log("OnClickindex");

        var videoway = $("source").attr("src");
        //    console.log(videoway);
        var video;
        for (var i=0; i< this.props.arr.length; i++){
            if(this.props.arr[i].src === videoway){
                video = i;
                console.log(video);
            }
        }
        return(

            video

        );
    }

    render() {



        //The film editor works with the raw footage, selecting shots and combining them into sequences which create a finished motion picture. Film editing is described as an art or skill, the only art that is unique to cinema, separating filmmaking from other art forms that preceded it, although there are close parallels to the editing process in other art forms such as poetry and novel writing. Film editing is often referred to as the "invisible art"[1] because when it is well-practiced, the viewer can become so engaged that he or she is not aware of the editor's work.

        function plussize() {
            console.log("OnClick");
            return(
                $("video").attr("width", 600)

            );
        }




        return (

            <div className="">
      <div className="container biotop ">
          <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12 aboutblockcolor bgwhite descstyle1 aboutbot abouttop bgwhite3 margtop">
                  <h2 className="fselite">Directing & film editing</h2>
                  <h5 className="fshide " id="aboutme">

                      I'm a novice director and student of Karpenko-Kary University based in Kiev, Ukraine. I'm studying at the faculty of directing so I have a passion for the film industry and like to work on projects for other people. Once it started as a hobby but then had become my life's work. In childhood I was studying at acting school. I've learnt there all acting techniques and tricks and made my first steps in the world of dramaturgy. Now I am actively exploring new techniques and styles of shooting, editing and screenwriting at University and implement them when working on projects. I've done a lot of projects in different styles and you can check out a few in my portfolio. My works show the state of my mind. I always try to project all my feelings and thoughts onto my work. And I have a lot what to say by them.
                  </h5>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 bgwhite2 bgwhite lptop margtop">
                  <h2 className="fselite">Latest projects</h2>

                  <div className="container ">
                      <div className="row ">
                          <div className="col-lg-6 col-md-12 col-sm-12 ">

                  <div className="card " >
                      <video controls poster="photographic-film.png" width="200" height="100" >
                          <source src="video2.webm"/>
                      </video>

                      <div className="container">
                          <h4 className="cardtitle">Shooting and editing.</h4>
                          <p className="carddesc">Project: Сlip for Malkovich rent.</p>
                      </div>
                  </div>

                          </div>

                          <div className="col-lg-6 col-md-12 col-sm-12" /*onClick={this.getindex}*/>

                              <div className="card biotop">
                                  <video controls="controls" poster="photographic-film.png" width="200" height="100">
                                      <source src="video2.webm"/>
                                  </video>
                                  <div className="container">
                                      <h4 className="cardtitle">Shooting and editing.</h4>
                                      <p className="carddesc">Project: Сlip for Malkovich rent.</p>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
            </div>
        );

    }
}

export default Bio