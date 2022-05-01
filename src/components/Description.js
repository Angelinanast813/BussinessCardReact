import React, {Component} from 'react'
import '../componentStyles/Description.css'

class Description extends Component {
 render() {
     return(

<div className="container descpod  ">

    <div className="row  ">
            <div className="col-lg-2 col-md-2 col-sm-12 bgbiopict biostyle3 borderstyle1 biostyle3text">
                <p><img src="bio.jpg" alt="bio photo" className="bioPhoto picBorder"/></p>
            </div>

    <div className="col-lg-4 col-md-4 col-sm-12 biostyle3 biostyle3text borderstyle1 blockdescmarg ">
    <h3 className="descstyle1 fselite margtop">Olga Schukina</h3>
    <h5 className="pos style2 descstyle1 fshandlee">Freelance director & photographer</h5>
    </div>

        <div className="col-lg-6 col-md-6 col-sm-12  biostyle3 borderstyle1">

        </div>
    </div>
</div>


     );
 }
}

export default Description