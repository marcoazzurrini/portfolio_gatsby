import React from "react"
import styled from "@emotion/styled"
import { HeadingSecondary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"

const About = styled.div`
  max-width: ${props => props.theme.sizes.innerW};
  padding-top: ${props => props.theme.pm.pm400};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding-top: ${props => props.theme.pm.pm300};
  }
`

const AboutText = styled.p`
  font-size: ${props => props.theme.text.text200};
  color: ${props => props.theme.colors.grey200};
  margin-bottom: ${props => props.theme.pm.pm200};
  line-height: 1.8;
`

export default function about() {
  return (
    <About id="about">
      <HeadingSecondary>
        <span>About</span> Me
      </HeadingSecondary>
      <SectionHero>Everything about me, myself and I.</SectionHero>
      <AboutText>
        This very website you're now watching. I wanted something fast and with
        good SEO for my portfolio, so vanilla JS with SCSS seemed like the best
        fit. The visual effect on the top right of the header is achieved via a
        light library called animate.js, dynamically modifying a SVG file.{" "}
      </AboutText>
      <AboutText>
        This very website you're now watching. I wanted something fast and with
        good SEO for my portfolio, so vanilla JS with SCSS seemed like the best
        fit. The visual effect on the top right of the header is achieved via a
        light library called animate.js, dynamically modifying a SVG file.{" "}
      </AboutText>
      <AboutText>
        This very website you're now watching. I wanted something fast and with
        good SEO for my portfolio, so vanilla JS with SCSS seemed like the best
        fit. The visual effect on the top right of the header is achieved via a
        light library called animate.js, dynamically modifying a SVG file.{" "}
      </AboutText>
    </About>
  )
}
