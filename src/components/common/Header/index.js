import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button";
import { Switch } from "@mui/material";
import { toast } from "react-toastify";

function Header() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "light" ? false : true
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setLight();
    } else {
      setDark();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="navbar">
      <h1 className="logo">
        CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
      </h1>
      <div className="links">
        <div>
          <Switch
            checked={darkMode}
            onClick={() => {
              changeMode();
            }}
          />
        </div>
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button
            text={"Dashboard"}
            onClick={() => console.log("btn clicked")}
            // outlined={true}
          />
        </Link>
      </div>
      <div className="mobile-drawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
