import React, {Component} from 'react'
import '../componentStyles/CardDetail.css'
import VideoCard from '../components/VideoCard'


/*
function CardDetail(stateway) {
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                  <div>{stateway.src}</div>
                    <div><p>Hello</p></div>
                </div>
            </div>
        </div>
    );
}
*/
/*
const VCard = (props) => {
    const index = PlayerAPI.get(parseInt(props.match.params.index, 10)
    )
    if(!videocard){
        return <div>Sorry</div>
    }
}
*/
/*
import photo from '../componentStyles/images/photographic-film.png'
import v1 from '../componentStyles/video/video1.mp4'
import v2 from '../componentStyles/video/video2.mp4'
import v3 from '../componentStyles/video/video3.mp4'
import v4 from '../componentStyles/video/video4.mp4'
*/

class CardDetail extends Component{

    render() {

        const index = this.props.match.params.index;
        //this.props.cardarr[index].src

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card" >
                            <video controls="controls" poster="" width="200" height="100">
                                <source src="" />
                            </video>
                            <div className="container">
                                <h3>{this.props.cardarr[index].src}</h3>
                                <p>kgkgkg</p>

                            </div>

                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CardDetail
