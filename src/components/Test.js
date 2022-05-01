import React, {Component} from 'react'
import "../componentStyles/Bio.css"
import Annotation from "./Annotation";
import PicBack from './PicBack'
import Description from './Description'
import 'bootstrap/dist/css/bootstrap.css'
import Bio from './Bio'


class Test extends Component {



    render() {


        return (
            <div className="mainbg">
            <Annotation />
            <PicBack />
            <Description />
            <Bio arr={this.props.cardarr} />
            </div>
        );
    }
}

export default Test