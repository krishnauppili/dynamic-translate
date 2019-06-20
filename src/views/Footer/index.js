import React,{Component} from 'react';
import AppContainer from "../../store/containers/app_container";
class Footer extends Component{


    /* Handle change for select component*/

    handleChange = (e) =>{
        const fromLanguage = this.props.currentLanguage;
        const toLanguage = e.target.value;
        let outputData = JSON.parse(localStorage.getItem("output_data"));
        if(outputData){
            this.props.translateContentAction(outputData,fromLanguage,toLanguage);
        }
        else{
            this.props.fetchDataAction(fromLanguage,toLanguage);
        }
    };

    render(){
        return(
            <footer>
                <div className="hidden-md-down">
                    <div className="container">
                        <div className="desc">
                            <h6>AIESEC</h6>
                            <p>AIESEC is a non-governmental not-for-profit organisation in consultative status with the United
                                Nations Economic and Social Council (ECOSOC), affiliated with the UN DPI, member of ICMYO, and
                                is recognized by UNESCO. AIESEC International Inc. is registered as a Not-for-profit
                                Organisation under the Canadian Not-for-profit Corporations Act - 2018-02-08, Corporation
                                Number: 1055154-6 and Quebec Business Number (NEQ) 1173457178 in Montreal, Quebec, Canada.</p>
                        </div>

                        <div className="about">
                            <h6>About</h6>
                            <a href="/about-us"> About Us </a>
                            <a href="#"> Help </a>
                            <a href="#"> Blog </a>
                            <a href="#"> Press </a>
                            <a href="#" target="_blank">Annual Report </a>
                        </div>

                        <div className="contact">
                            <h6> Youth </h6>
                            <a> Global Volunteer </a>
                            <a> Global Talent </a>
                            <a> Global Entrepreneur </a>
                            <a> Youth 4 Global Goals </a>
                            <a> YouthSpeak </a>
                        </div>

                        <div className="partners">
                            <h6> Organizations </h6>
                            <a href="#"> Partner with us </a>
                            <a href="#"> Global Volunteer </a>
                            <a href="#"> Global Talent </a>
                            <a href="#"> Global Entrepreneur </a>
                            <a href="#"> Premium Organization </a>
                        </div>

                        <div className="membership">
                            <h6> Membership </h6>
                            <a> Join Us </a>
                            <a> Find your country! </a>
                            <a href="#" target="_blank"> Alumni </a>
                        </div>
                    </div>

                    <div className="container">
                        <span>© AIESEC 2018</span>
                        <span>
                            <a href="#" target="_blank"> Terms & Privacy </a>
                        </span>
                        <span>
                            <a href="#" target="_blank"> Cookies Policy </a>
                        </span>
                        <span/>
                        <span className="social-footer">
                            <a href="#" target="_blank"><i className="cm cm-facebook"></i></a>
                            <a href="#" target="_blank"><i className="cm cm-instagram"></i></a>
                            <a href="#" target="_blank"><i className="cm cm-twitter"></i></a>
                            <a href="#" target="_blank"><i className="cm cm-linkedin"></i></a>
                            <a href="#" target="_blank"><i className="cm cm-youtube"></i></a>
                        </span>
                        <span>
                            <div className="select-box-custom">
                                <div className="custom-footer-select dropup">
                                    <select
                                        onChange={this.handleChange}
                                        value={this.props.currentLanguage}>
                                        <option value="English">English</option>
                                        <option value="Spanish">Spanish</option>
                                        <option value="Portuguese">Portuguese</option>
                                        <option value="French">French</option>
                                        <option value="Mandarin (Simplified)">Mandarin (Simplified)</option>
                                        <option value="Polish">Polish</option>
                                        <option value="German">German</option>
                                    </select>
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </footer>
        );
    }
}
export default AppContainer(Footer);