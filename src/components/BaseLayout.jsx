import React, { useEffect, useState } from "react";
import Style from "./BaseLayout.module.scss";
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Work from "./work/Work";
import Blog from "./blog/Blog";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Analytics from "./analytics/Analytics";
import { Link, useLocation } from "react-router-dom";

export default function BaseLayout() {
  let [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  function handleToggleDarkMode() {
    let oppositeOfCurrentDarkMode = !darkMode;
    console.log(oppositeOfCurrentDarkMode);
    localStorage.setItem("darkMode", `${oppositeOfCurrentDarkMode}`);
    setDarkMode(oppositeOfCurrentDarkMode);
  }

  useEffect(() => {
    let detectedDarkMode = eval(localStorage.getItem("darkMode"));

    if (detectedDarkMode) {
      setDarkMode(detectedDarkMode);
    } else {
      localStorage.setItem("darkMode", "false");
    }
  }, []);

  return (
    <Box className={darkMode ? Style.dark : Style.light}>
      <Grid
        container
        display={"flex"}
        flexDirection={"column"}
        minHeight={"100vh"}
        justifyContent={"space-between"}
      >
        <Grid item>
          <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} />
        </Grid>
        <Grid item flexGrow={1}>
          <Routes>
            <Route exact path={"/"} element={<Home />} />
            <Route exact path={"/about"} element={<About />} />
            <Route exact path={"/history"} element={<Work />} />
            <Route exact path={"/blog"} element={<Blog />} />
            <Route exact path={"/analytics"} element={<Analytics />} />
            <Route path={"*"} element={<Home />} />
          </Routes>
        </Grid>
        <Grid item>
          <Box
            component={"footer"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            py={"1.5rem"}
            sx={{ opacity: 0.7 }}
            width={"100%"}
          >
            <p>Modified &hearts; by Umar Basha</p>
            <p>&copy; 2023</p>
            <Link to={"/analytics"}> Analytics</Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
