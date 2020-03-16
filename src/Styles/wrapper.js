import styled from "@emotion/styled"

export const Wrapper = styled.div`
  width: 93%;
  max-width: ${props => props.theme.sizes.layoutW};
  margin: auto;

  @media only screen and (max-width: ${props =>
      props.theme.breakpoints.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`
