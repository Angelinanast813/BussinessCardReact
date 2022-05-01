import React, {Component} from 'react'
import VideoCard from '../components/VideoCard'
import PCards from '../componentStyles/PCards.css'


class PCard extends Component{

    render() {
/*
        var arr = [
            {src: "video1.mp4", title: "Shooting and editing", desc: "Сlip for Malkovich rent"},
            {src: "video2.mp4", title: "Shooting and editing", desc: "Сlip for Malkovich rent"},
            {src: "video3.mp4", title: "Shooting and editing", desc: "Сlip for Malkovich rent"},
            {src: "video4.mp4", title: "Shooting and editing", desc: "Сlip for Malkovich rent"},
            {src: "video1.mp4", title: "Shooting and editing", desc: "Сlip for Malkovich rent"}
            ];

*/
    //    const cards = this.props.arr.map(card => {return<VideoCard way={card} />})
        const cards = this.props.arr.map((card, index) => {return<VideoCard way={card} index={index} />})

               return (
              <div className="bgimage2">
          <div className="container bgimage">

            <div className="row " align="center">

                {cards}

                  </div>
        </div>
                  <hr/>
              </div>
    );
       }
}

export default PCard