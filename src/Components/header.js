import React from "react"
import Chevron from "../img/chevron-down.png"
import styled from "@emotion/styled"
import Github from "../img/github.svg"
import Document from "../img/document.svg"
import Origami from "../img/origami.svg"
import Curriculum from "../files/marco-azzurrini-curriculum.pdf"

const Header = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`

const HeaderCol = styled.div`
  margin-right: ${props => props.theme.pm.pm500};
`

const Title = styled.h1`
  font-size: ${props => props.theme.text.headingPrimary};
  font-weight: 200;
  color: ${props => props.theme.colors.grey400};
  margin-bottom: ${props => props.theme.pm.pm200};
  span {
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
`

const HeaderHero = styled.p`
  color: ${props => props.theme.colors.grey200};
  font-size: ${props => props.theme.text.bodyLarge};
  span {
    color: ${props => props.theme.colors.grey400};
  }
`

const ChevronDown = styled.a`
  width: 30px;
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 15px);
  transition: all 0.25s ease-in-out;
  cursor: pointer;
  &:hover {
    bottom: 2.4rem;
  }
  img {
    width: 100%;
  }
`

const HeaderList = styled.ul``

const HeaderListItem = styled.li`
  margin-bottom: ${props => props.theme.pm.pm200};
`

const BtnLink = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.colors.grey300};
  font-size: ${props => props.theme.text.bodyMedium};

  span {
    display: inline-block;
    cursor: pointer;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: ${props =>
      props.primary ? props.theme.colors.primary : props.theme.colors.white};
    margin-right: ${props => props.theme.pm.pm200};
    box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 40%;
    }
  }
`

export default function header() {
  return (
    <Header id="header">
      <HeaderCol>
        <Title>
          Hello
          <span role="img" aria-label="peace sign">
            ✌🏼
          </span>
          , <br />
          I'm <span className="header__title--name">Marco</span>{" "}
        </Title>
        <HeaderHero>
          A passionate
          <span className="header__hero--role"> Frontend Developer</span>
        </HeaderHero>
      </HeaderCol>

      <HeaderList>
        <HeaderListItem>
          <BtnLink
            primary
            href={Curriculum}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <img src={Document} alt="curriculum" />
            </span>
            Curriculum
          </BtnLink>
        </HeaderListItem>
        <HeaderListItem>
          <BtnLink
            href="https://www.linkedin.com/in/marco-azzurrini/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <img src={Origami} alt="cover letter" />
            </span>
            LinkedIn
          </BtnLink>
        </HeaderListItem>
        <HeaderListItem>
          <BtnLink
            href="https://github.com/marcoazzurrini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <img src={Github} alt="github" />
            </span>
            Github
          </BtnLink>
        </HeaderListItem>
      </HeaderList>
      <ChevronDown href="#work">
        <img src={Chevron} alt="scroll down" />
      </ChevronDown>
    </Header>
  )
}
