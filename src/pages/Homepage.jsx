import React from "react";
import bg_img from "../images/27230.jpg";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { Link as ScrollLink } from "react-scroll";

// import { FullPage, Slide } from 'react-full-page';
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  CssBaseline,
  Container,
} from "@mui/material";
import About from "./About";

const Homepage = () => {
  const vibgyorGradient = `linear-gradient(45deg, #FFD700, #FF69B4, #00FF7F, #1E90FF, #FFA500, #9400D3)`;
  const vibgyorFont = {
    backgroundImage: vibgyorGradient,
    WebkitBackgroundClip: "text",
    color: "transparent",
    fontFamily: "cursive",
    fontWeight: "bold",
    fontSize: "3rem",
  };
  return (
    <>
      <div style={{ position: "relative" }}>
        <img src={bg_img} alt="" style={{ width: "100%", height: "auto" }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
          <AppBar
            position="static"
            style={{ backgroundColor: "transparent", boxShadow: "none" }}
          >
            <Toolbar style={{ justifyContent: "space-between" }}>
              <Typography variant="poster" component="div" style={vibgyorFont}>
                <Link href="#" color="inherit" underline="none">
                  D'CODE-1611
                </Link>
              </Typography>
              <nav style={{ fontSize: "1.5rem", fontWeight: "600" }}>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  style={{ marginRight: 27 }}
                >
                  Start /{">"}
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  style={{ marginRight: 27 }}
                >
                  Contact /{">"}
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  style={{ marginRight: 27 }}
                >
                  About /{">"}
                </Link>
                <Link
                  href="#"
                  color="inherit"
                  underline="none"
                  style={{ marginRight: 27 }}
                >
                  Works /{">"}
                </Link>
                <Link href="#" color="inherit" underline="none">
                  View Blog /{">"}
                </Link>
              </nav>
            </Toolbar>
          </AppBar>
          <Container position="static">
            <div style={{ paddingTop: "200px", paddingLeft: "70px" }}>
              <Typography color="white" variant="h5">
                start /{">"}
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingTop: "100px",
                }}
              >
                <Typography
                  color="white"
                  variant="h2"
                  sx={{ fontWeight: "600", marginRight: "10px" }}
                >
                  Hi, my name is
                </Typography>
                <Typography
                  variant="h2"
                  sx={{ fontWeight: "500", paddingLeft: "30px" }}
                  color="#8A2BE2"
                >
                  Rasidul Hoque
                </Typography>
              </div>
              <div>
                <h1
                  style={{
                    fontWeight: "normal",
                    color: "white",
                    fontSize: "40px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Font1",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    I
                  </span>{" "}
                  <span
                    style={{
                      fontFamily: "Font2",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    design
                  </span>{" "}
                  and{" "}
                  <span
                    style={{
                      fontFamily: "Font3",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    develop
                  </span>{" "}
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      loop
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      words={["Webapps", "Mobile Apps", "Games", "ML/AI"]}
                      onLoop={(loopCount) =>
                        console.log(`Just completed loop ${loopCount}`)
                      }
                    />
                  </span>
                </h1>
              </div>
              <ScrollLink
                to="about-section" // Provide the ID of the target section
                smooth={true} // Enable smooth scrolling
                duration={500} // Set the scrolling duration in milliseconds
              >
                <div
                  style={{
                    paddingTop: "30px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant="overline"
                    color="#AFAFA7"
                    fontSize="20px"
                  >
                    Let me show you ...
                  </Typography>
                  <div style={{ marginLeft: "5px" }}>
                    <ExpandCircleDownIcon
                      style={{ color: "#AFAFA7", fontSize: "4rem" }}
                    />
                  </div>
                </div>
              </ScrollLink>
            </div>
          </Container>
        </div>
        <div id="about-section">
          <About />
        </div>
      </div>
    </>
  );
};

export default Homepage;
