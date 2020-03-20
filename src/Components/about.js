import React from "react"
import styled from "@emotion/styled"
import { HeadingSecondary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"

const About = styled.section`
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
      <SectionHero>Let me to give you some context...</SectionHero>
      <AboutText>
        After completing my IT diploma, I decided to relocate to London, UK,
        where I stayed for almost 6 years. I worked a variety of jobs, spanning
        from catering, construction to transporation.
      </AboutText>
      <AboutText>
        Looking back, those were very formative years, I learned many life
        lessons, including the value of hard work and dedication. Working
        blue-collar jobs allowed me to build my character and give me the
        determination to later succeed as a developer.
      </AboutText>
      <AboutText>
        However after a few years I felt like I could do more.
      </AboutText>
      <AboutText>
        In March 2018, after a minor car accident while I was working my courier
        job, I decided it was time for a change, it was time to go back to my
        original passion: programming!
      </AboutText>
      <AboutText>
        I started waking up at 6am to study HTML, CSS and Javascript before
        going to work. I quickly started loving Javascript, gradually I
        dedicated more and more time to it and in January 2019 I decided to take
        the risk and transition to full time developer.
      </AboutText>
      <AboutText>
        During this time, I was awarded by Deliveroo a full scholarship to study
        Front-end Web Development with OpenClassrooms, europe’s largest
        online-only higher education institution. I also took a number of online
        courses, covering all the topics then I need to assert myself in the job
        market.
      </AboutText>
      <AboutText>
        Most importantly every single course and lesson that I took, I applied
        it. I built countless projects, some of theme you can see on this
        website. I also solved more than 200 algorithmic challenges on websites
        like codewars.com, hackerrank.com and hackajob.com. I fell in love with
        coding and problem solving.
      </AboutText>
      <AboutText>
        I can confidently say that programming is one of the best things that
        has ever happened to me. It has taught me to think critically and gave
        me incredible opportunities.
      </AboutText>
    </About>
  )
}
