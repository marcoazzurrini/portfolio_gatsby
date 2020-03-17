import React from "react"
import Screenshot from "../img/portfolio.png"
import styled from "@emotion/styled"
import GithubSvg from "../img/github.svg"
import LinkSvg from "../img/link.svg"
import { HeadingSecondary, HeadingTertiary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"

const WorkSection = styled.div`
  width: 100%;
  padding-top: ${props => props.theme.pm.pm400};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding-top: ${props => props.theme.pm.pm300};
  }
`

const ProjectItem = styled.li`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  margin-bottom: ${props => props.theme.pm.pm400};

  img {
    max-width: 50%;
    display: inline-block;
    margin-right: ${props => props.theme.pm.pm300};
    box-shadow: 3px 6px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  &:nth-of-type(even) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    img {
      margin-left: ${props => props.theme.pm.pm300};
      margin-right: 0;
    }
  }

  @media only screen and (max-width: ${props =>
    props.theme.breakpoints.mobile}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    img {
      max-width: 100%;
      width: 100%;
      margin-right: 0;
      margin-bottom: ${props => props.theme.pm.pm300};
    }

    
  &:nth-of-type(even) {
    flex-direction: column;
    justify-content: flex-start;
    img {
      margin-left: 0;
    }
  }
`

const ProjectDescription = styled.p`
  width: 100%;
  font-size: ${props => props.theme.text.text200};
  line-height: 1.6;
  color: ${props => props.theme.colors.grey200};
  margin-bottom: ${props => props.theme.pm.pm200};
`

const ProjectLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const ProjectCol = styled.div`
  width: 50%;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`

const ProjectStack = styled.p`
  color: ${props => props.theme.colors.grey400};
  font-size: ${props => props.theme.text200};
  margin-bottom: ${props => props.theme.pm.pm100};
  font-weight: 700;
`
const BtnLink = styled.a`
  transition: all 0.25s ease-in-out;
  margin-right: ${props => props.theme.pm.pm200};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.1);
  background-color: ${props =>
    props.primary ? props.theme.colors.primary : "transparent"};
  background-image: url(${props => (props.github ? GithubSvg : LinkSvg)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: ${props => (props.github ? "cover" : "38%")};
  &:hover {
    margin-top: -${props => props.theme.pm.pm100};
  }
`

export default function work() {
  return (
    <WorkSection id="work">
      <HeadingSecondary>
        My <span>Work</span>
      </HeadingSecondary>
      <SectionHero>A collection of some my best projects.</SectionHero>

      <ul>
        <ProjectItem>
          <img src={Screenshot} alt="project one" />
          <ProjectCol>
            <HeadingTertiary>
              Personal <span>Portfolio</span>
            </HeadingTertiary>
            <ProjectStack>REACT - EMOTIONJS - GATSBY</ProjectStack>
            <ProjectDescription>
              This very website you're now watching. I wanted something fast and
              with good SEO for my portfolio, so vanilla JS with SCSS seemed
              like the best fit. The visual effect on the top right of the
              header is achieved via a light library called animate.js,
              dynamically modifying a SVG file.
            </ProjectDescription>
            <ProjectLinks>
              <BtnLink
                href="https://github.com/marcoazzurrini"
                target="_blank"
                aria-label="github project"
                rel="noopener noreferrer"
                github
              ></BtnLink>
              <BtnLink primary></BtnLink>
            </ProjectLinks>
          </ProjectCol>
        </ProjectItem>

        <ProjectItem reverse>
          <img src={Screenshot} alt="project one" />
          <ProjectCol>
            <HeadingTertiary>
              Personal <span>Portfolio</span>
            </HeadingTertiary>
            <ProjectStack>REACT - EMOTIONJS - GATSBY</ProjectStack>
            <ProjectDescription>
              This very website you're now watching. I wanted something fast and
              with good SEO for my portfolio, so vanilla JS with SCSS seemed
              like the best fit. The visual effect on the top right of the
              header is achieved via a light library called animate.js,
              dynamically modifying a SVG file.
            </ProjectDescription>
            <ProjectLinks>
              <BtnLink
                href="https://github.com/marcoazzurrini"
                target="_blank"
                aria-label="github project"
                rel="noopener noreferrer"
                github
              ></BtnLink>
              <BtnLink primary></BtnLink>
            </ProjectLinks>
          </ProjectCol>
        </ProjectItem>

        <ProjectItem>
          <img src={Screenshot} alt="project one" />
          <ProjectCol>
            <HeadingTertiary>
              Personal <span>Portfolio</span>
            </HeadingTertiary>
            <ProjectStack>REACT - EMOTIONJS - GATSBY</ProjectStack>
            <ProjectDescription>
              This very website you're now watching. I wanted something fast and
              with good SEO for my portfolio, so vanilla JS with SCSS seemed
              like the best fit. The visual effect on the top right of the
              header is achieved via a light library called animate.js,
              dynamically modifying a SVG file.
            </ProjectDescription>
            <ProjectLinks>
              <BtnLink
                href="https://github.com/marcoazzurrini"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github project"
                github
              ></BtnLink>
              <BtnLink primary></BtnLink>
            </ProjectLinks>
          </ProjectCol>
        </ProjectItem>
      </ul>
    </WorkSection>
  )
}
