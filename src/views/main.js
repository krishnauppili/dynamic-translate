import React,{Component} from 'react';
import Footer from "./Footer";
import GlobalBody from "./GlobalBody";
import AppContainer from "../store/containers/app_container";
import {getLanguageFromCode} from "../lib/constants";

class Main extends Component{

    componentDidMount() {
        const fromLanguage = this.props.currentLanguage;
        const toLanguage = getLanguageFromCode(navigator.language);
        let outputData = JSON.parse(localStorage.getItem("output_data"));
        if(outputData){
            this.props.translateContentAction(outputData,fromLanguage,toLanguage);
        }
        else{
            this.props.fetchDataAction(fromLanguage,toLanguage);
        }
    }

    componentWillUnmount() {
        localStorage.removeItem("output_data");
    }

    render() {
        return(
            <div>
                <div className="cover-image-gv">
                    <div className="banner-overlay global">
                        <div className="global-logo">
                            <img className="logo" src="https://cdn-expa.aiesec.org/assets/images/brand_icons/GV.png"
                                 alt="Global Volunteer Logo"/>
                        </div>
                    </div>
                </div>
                <GlobalBody/>
                <Footer/>
            </div>
        )
    }
}
export default AppContainer(Main);