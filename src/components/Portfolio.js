import React, {Component} from 'react'
import PBack from "./PBack";
import PCards from  "./PCards"

class Portfolio extends Component{
    render() {


        return(
            <>
                <PBack />
                <PCards arr={this.props.cardarr}/>
                </>
        );
    }

}

export default Portfolio