import React from "react"
import styled from "@emotion/styled"

const Contact = styled.div`
  padding-top: ${props => props.theme.pm.pm500};
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
  margin-bottom: ${props => props.theme.pm.pm300};
`

const ContactLinks = styled.a`
  display: block;
  font-size: ${props => props.theme.text.bodyLarge};
  color: ${props => props.theme.colors.grey400};
  margin-bottom: ${props => props.theme.pm.pm200};
`

export default function contact() {
  return (
    <Contact id="contact">
      <HeadingSecondary>
        Let's <span>talk</span>
      </HeadingSecondary>
      <SectionHero>You can reach me at:</SectionHero>
      <ContactLinks href="mailto:marco.azzurrini.dev@gmail.com">
        marco.azzurrini.dev@gmail.com
      </ContactLinks>
      <ContactLinks
        href="https://www.linkedin.com/in/marco-azzurrini/"
        target="_blank"
        rel="noopener noreferrer"
      >
        linkedin.com/in/marco-azzurrini
      </ContactLinks>
    </Contact>
  )
}
