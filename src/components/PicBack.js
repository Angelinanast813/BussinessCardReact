import React, {Component} from 'react'
import '../componentStyles/PicBack.css'

class PicBack extends Component {
    render() {

       return (
            <div>
                <p>
                    <img src="pic3.jpg" alt = "photo" className="pic" />
                </p>
            </div>
        );
    }
}

export default PicBack