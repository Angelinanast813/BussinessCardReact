import React, {Component} from 'react'
import '../componentStyles/Footer.css'

class Footer extends Component{
    render() {
        return(
            <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <h6 className="fontfooter">©2020OLANDACHUKINA</h6>
                        <p className="fontstyle2">
                            Any copying and/or reprinting of materials and content is forbidden, except for cases of special permit issuance from the legal owner of the information.
                        </p>
                    </div>

                    <div className="col-lg-2 col-md-2 ">

                    </div>

                    <div className="col-lg-4 col-md-4 col-sm-6" id="contacts">
                        <a href="https://www.facebook.com/profile.php?id=100022181265999"><img src={process.env.PUBLIC_URL + '/facebook.png'} alt="logo" className="logoset iconstyle"  /></a>
                        <a href="https://instagram.com/shchykina?igshid=1apuqy41jvc5x"><img src={process.env.PUBLIC_URL + '/instagram2.png'} alt="logo" className="logoset iconstyle"   /></a>
                        <a href="https://t-do.ru/olandachykina"><img src={process.env.PUBLIC_URL + '/telegram.png'} alt="logo" className="logoset iconstyle"  /></a>
                    </div>

                </div>
            </div>
            </div>
        );
    }
}

export default Footer