import React from "react";
import "./style.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Footer(){
    return (
        <div className="footer-flex">
            <h2>CryptoTracker.</h2>
            <div className="logo-container">
                <logo><FacebookIcon/></logo>
                <logo><XIcon/></logo>
                <logo><InstagramIcon/></logo>
                <logo><EmailIcon/></logo>
            </div>
        </div>
    )
}

export default Footer;