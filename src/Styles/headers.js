import styled from "@emotion/styled"

export const HeadingPrimary = styled.h1`
  font-size: ${props => props.theme.text.text800};
  font-weight: 400;
  color: ${props => props.theme.colors.grey400};
  margin-bottom: ${props => props.theme.pm.pm200};
  span {
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }
  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.text.text700};
  }
`

export const HeadingSecondary = styled.h2`
  font-size: ${props => props.theme.text.text700};
  color: ${props => props.theme.colors.grey400};
  margin-bottom: ${props => props.theme.pm.pm200};

  span {
    color: ${props => props.theme.colors.primary};
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.text.text600};
  }
`

export const HeadingTertiary = styled.h3`
  font-size: ${props => props.theme.text.text500};
  color: ${props => props.theme.colors.grey400};
  margin-bottom: ${props => props.theme.pm.pm200};

  span {
    color: ${props => props.theme.colors.primary};
  }

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.text.text500};
  }
`
