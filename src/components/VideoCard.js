import React, {Component} from 'react'
import PCards from '../componentStyles/PCards.css'
//import CardDetail from '../components/CardDetail'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

/*
class VideoCard extends Component {



    constructor(way){
        super(way);
        this.handleChange = this.handleChange.bind(this);
        this.state = way;
    }

    handleChange(e){
        this.setState({way});
    }




    render() {
        const myway = this.state.myway;
        
        function details() {
            return(
                <CardDetail stateway={myway}/>
            );
        }

        return (
            <div className="col-4 ">

                    <div className="card cardstyle1">
                        <video controls="controls" poster="photographic-film.png" width="200" height="100"
                               className="videoborder">
                            <source src={myway.value.src}/>
                        </video>
                        <div className="container">
                            <h3 className="cardtitle">{myway.title}</h3>
                            <p className="carddesc">{myway.desc}</p>

                        </div>
                    </div>

            </div>
        );
    }



}
*/


function VideoCard({way, index}){
//() => <CardDetail stateway={way}/>
    var variab = {way};

        return(

            <div className="col-lg-4 col-md-4 col-sm-12 ">
                <Link to={'/card/' +  index} className="link">
                <div className="card cardstyle1" >
                    <video controls="controls" poster="photographic-film.png" width="200" height="100" className="videoborder">
                        <source src={way.src} type='video/webm' />
                    </video>
                    <div className="container">
                        <h3 className="cardtitle" >{way.title}</h3>
                        <p className="carddesc">{way.desc}</p>

                    </div>

                </div>
                </Link>

            </div>


        );

 }

export default VideoCard