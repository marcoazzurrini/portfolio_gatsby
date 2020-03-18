import React from "react"
import styled from "@emotion/styled"
import { Svg } from "./svg"
import { HeadingSecondary } from "../Styles/headers"
import { SectionHero } from "../Styles/text"

const Contact = styled.div`
  padding-top: ${props => props.theme.pm.pm400};
  width: 100%;
  padding-bottom: ${props => props.theme.pm.pm400};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    padding-top: ${props => props.theme.pm.pm400};
  }
`

const ContactLinks = styled.a`
  display: block;
  font-size: ${props => props.theme.text.text400};
  color: ${props => props.theme.colors.grey300};
  margin-bottom: ${props => props.theme.pm.pm300};

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.text.text200};
  }
`

const ContactSocial = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.theme.pm.pm400};
`

const SocialLinks = styled.a`
  width: ${props => props.theme.pm.pm200};
  display: inline-block;
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

      <ContactSocial>
        <li>
          <SocialLinks
            href="https://www.facebook.com/marcoazzurrini"
            target="_blank"
            rel="noreferrer"
            aria-label="facebook"
          >
            <Svg
              viewbox="0 0 448 512"
              fill="#127EB1"
              path="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z"
            />
          </SocialLinks>
        </li>
        <li>
          <SocialLinks
            href="https://github.com/marcoazzurrini"
            target="_blank"
            rel="noreferrer"
            aria-label="github"
          >
            <Svg
              viewbox="0 0 496 512"
              fill="#2d2d2d"
              path="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            />
          </SocialLinks>
        </li>
        <li>
          <SocialLinks
            href="https://www.linkedin.com/in/marco-azzurrini/"
            target="_blank"
            rel="noreferrer"
            aria-label="linkedin"
          >
            <Svg
              viewbox="0 0 512 512"
              fill="#0e76a8"
              path="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"
            />
          </SocialLinks>
        </li>
      </ContactSocial>
    </Contact>
  )
}
