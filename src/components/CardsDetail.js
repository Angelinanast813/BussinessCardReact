import React, {Component} from 'react'
import logo from '../componentStyles/images/photographic-film.png'
import '../componentStyles/CardDetail.css'

class CardsDetail extends Component{
    render() {

        const index = this.props.match.params.index;


        //this.props.cardarr[index].src
        return (

            <div className="cdback2 topdict bgimage2 ">

            <div className="container cdback4 vl contsize">

                <div className="row" align="center">
                    <div className="col-12 ">
                         <div className="cdback2 ">
                            <video className="topdict videoborder" controls="controls" poster={process.env.PUBLIC_URL + '/photographic-film.png'} width="600" height="400">
                                <source src={process.env.PUBLIC_URL + '/' + this.props.cardarr[index].src} />
                            </video>
                         </div>
                            <div className="container desctop">
                                <h3 className="carddesctitlefont">{this.props.cardarr[index].title}</h3>
                                <p className="carddescfont">{this.props.cardarr[index].fulldesc}</p>

                            </div>


                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default CardsDetail
