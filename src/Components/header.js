import React from "react"
import Chevron from "../img/chevronDown.png"
import styled from "@emotion/styled"
import DeveloperSVG from "../img/coding.svg"
import Document from "../img/document.svg"
import Curriculum from "../files/marco-azzurrini-curriculum.pdf"
import { HeadingPrimary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"
import { BtnMedium } from "../Styles/buttons"

const Header = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${props => props.theme.pm.pm200};
  }
`

const HeaderCol = styled.div`
  width: 50%;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    margin-right: 0;
    margin-bottom: ${props => props.theme.pm.pm300};
    width: 100%;
  }
`

const ChevronDown = styled.a`
  width: ${props => props.theme.sizes.chevronW};
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 12.5px);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    bottom: 2.4rem;
  }
  img {
    width: 100%;
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    display: none;
  }
`
const HeaderImg = styled.img`
  width: 50%;
  max-width: ${props => props.theme.sizes.headerImgW};
  margin-left: auto;
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    width: 80%;
    display: block;
    margin: 0 auto;
  }
`

export default function header() {
  return (
    <Header id="header">
      <HeaderCol>
        <HeadingPrimary>
          Hello
          <span role="img" aria-label="peace sign">
            ✌🏼
          </span>
          , <br />
          I'm <span>Marco</span>{" "}
        </HeadingPrimary>
        <SectionHero>
          A passionate
          <span> Frontend Developer</span>
        </SectionHero>
        <BtnMedium
          primary
          href={Curriculum}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Document} alt="curriculum" />
          Curriculum
        </BtnMedium>
      </HeaderCol>

      <HeaderImg src={DeveloperSVG} alt="developer" />

      <ChevronDown alt="scroll down" href="#work">
        <img src={Chevron} alt="scroll down" />
      </ChevronDown>
    </Header>
  )
}
