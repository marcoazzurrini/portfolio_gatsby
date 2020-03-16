import React from "react"
import Helmet from "../Components/helmet"
import MainNav from "../Components/navbar"
import Header from "../Components/header"
import About from "../Components/about"
import Contact from "../Components/contact"
import Work from "../Components/work"
import MobileNav from "../Components/mobileNav"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { theme } from "../Styles/theme"
import styled from "@emotion/styled"

const Wrapper = styled.div`
  width: 90%;
  max-width: ${props => props.theme.sizes.myWorkW};
  margin: auto;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

export default () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@500&display=swap");
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          overflow-x: hidden;
          font-family: "Montserrat", sans-serif;
        }
        p {
          font-weight: 400;
        }
        h1,
        h2,
        h3,
        h4 {
          font-family: "Libre Baskerville", serif;
        }
        ul {
          list-style: none;
        }
        a {
          text-decoration: none;
        }
      `}
    />
    <Wrapper>
      <Helmet />
      <MobileNav />
      <MainNav />
      <Header />
      <Work />
      <About />
      <Contact />
    </Wrapper>
  </ThemeProvider>
)
