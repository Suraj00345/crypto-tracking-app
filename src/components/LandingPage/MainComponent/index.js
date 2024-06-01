import React from "react";
import "./style.css";
import Button from "../../common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";

const MainComponent = () => {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <p className="info-text">
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </p>
        <motion.div className="btn-flex"
         initial={{ opacity: 0, x: 50 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{ duration: 0.5, delay: 0.75 }}>
          <Link to="/dashboard">
          <Button text={"Dashboard"} onClick={() => console.log("btn clicked")}/>
          </Link>
          <RWebShare
              data={{
                text: "Crypto Tracker Application",
                url: "https://piyushjain5350-crypto-coin-tracker.vercel.app/",
                title: "Crypto  Tracker",
              }}
              onClick={() => console.log("shared successfully!") }
            >
          <Button text={"Share"} onClick={() => console.log("shared successfully!")} outlined={true} event={true}/>
            </RWebShare>
        </motion.div>
      </div>

      <div className="phone-container">
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
};

export default MainComponent;
