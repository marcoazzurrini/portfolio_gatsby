import React from "react"
import Screenshot from "../img/portfolio.png"
import Origami from "../img/origami.svg"
import styled from "@emotion/styled"

const GithubSVG = props => {
  return (
    <svg width="40%" viewBox="0 0 496 512" fill={props.fill}>
      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
    </svg>
  )
}

const WorkSection = styled.div`
  width: 100%;
  padding-top: ${props => props.theme.pm.pm400};
`
const HeadingSecondary = styled.h3`
  font-size: ${props => props.theme.text.headingSecondary};
  color: ${props => props.theme.colors.grey400};
  margin-bottom: ${props => props.theme.pm.pm200};

  span {
    color: ${props => props.theme.colors.primary};
  }
`

const SectionHero = styled.p`
  font-size: ${props => props.theme.text.bodyLarge};
  color: ${props => props.theme.colors.grey200};
  margin-bottom: ${props => props.theme.pm.pm400};
`

const ProjectItem = styled.li`
  display: flex;
  justfiy-content: flex-start;
  align-items: center;
  margin-bottom: ${props => props.theme.pm.pm400};

  .projectImg {
    max-width: 50%;
    display: inline-block;
    margin-right: ${props => props.theme.pm.pm300};
    box-shadow: 3px 6px 8px rgba(0, 0, 0, 0.15);
    border-radius: 3px;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    .projectImg {
      margin-left: ${props => props.theme.pm.pm300};
      margin-right: 0;
    }
  }
`

const ProjectDescription = styled.p`
  max-width: 400px;
  font-size: ${props => props.theme.text.bodyMedium};
  line-height: 1.6;
  color: ${props => props.theme.colors.grey200};
  margin-bottom: ${props => props.theme.pm.pm300};
`

const ProjectLinks = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const BtnLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: ${props =>
    props.primary ? props.theme.colors.primary : props.theme.colors.white};
  margin-right: ${props => props.theme.pm.pm200};
  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.25s ease-in-out;
  &:hover {
    margin-top: -${props => props.theme.pm.pm100};
  }
  svg,
  img {
    width: 40%;
  }
`

export default function work() {
  return (
    <WorkSection id="work">
      <HeadingSecondary>
        My <span>Work</span>
      </HeadingSecondary>
      <SectionHero>A collection of some my best projects.</SectionHero>

      <ul className="work__projects">
        <ProjectItem>
          <img src={Screenshot} className="projectImg" alt="project one" />
          <div className="work__project--content">
            <ProjectDescription>
              This very website you're now watching. I wanted something fast and
              with good SEO for my portfolio, so vanilla JS with SCSS seemed
              like the best fit. The visual effect on the top right of the
              header is achieved via a light library called animate.js,
              dynamically modifying a SVG file.
            </ProjectDescription>
            <ProjectLinks>
              <BtnLink
                primary
                href="https://github.com/marcoazzurrini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSVG fill="#fff" />
              </BtnLink>
              <BtnLink>
                <img src={Origami} alt="visit" />
              </BtnLink>
            </ProjectLinks>
          </div>
        </ProjectItem>

        <ProjectItem reverse>
          <img src={Screenshot} className="projectImg" alt="project one" />
          <div className="work__project--content">
            <ProjectDescription>
              This very website you're now watching. I wanted something fast and
              with good SEO for my portfolio, so vanilla JS with SCSS seemed
              like the best fit. The visual effect on the top right of the
              header is achieved via a light library called animate.js,
              dynamically modifying a SVG file.
            </ProjectDescription>
            <ProjectLinks>
              <BtnLink
                primary
                href="https://github.com/marcoazzurrini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSVG fill="#fff" />
              </BtnLink>
              <BtnLink>
                <img src={Origami} alt="visit" />
              </BtnLink>
            </ProjectLinks>
          </div>
        </ProjectItem>

        <ProjectItem>
          <img src={Screenshot} className="projectImg" alt="project one" />
          <div className="work__project--content">
            <ProjectDescription>
              This very website you're now watching. I wanted something fast and
              with good SEO for my portfolio, so vanilla JS with SCSS seemed
              like the best fit. The visual effect on the top right of the
              header is achieved via a light library called animate.js,
              dynamically modifying a SVG file.
            </ProjectDescription>
            <ProjectLinks>
              <BtnLink
                primary
                href="https://github.com/marcoazzurrini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSVG fill="#fff" />
              </BtnLink>
              <BtnLink>
                <img src={Origami} alt="visit" />
              </BtnLink>
            </ProjectLinks>
          </div>
        </ProjectItem>
      </ul>
    </WorkSection>
  )
}
