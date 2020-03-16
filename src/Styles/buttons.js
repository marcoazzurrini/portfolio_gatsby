import styled from "@emotion/styled"

export const BtnMedium = styled.a`
  background: ${props => props.theme.colors.primary};
  padding: ${props => props.theme.pm.pm100} ${props => props.theme.pm.pm200};
  color: #fff;
  display: inline-block;
  border: none;
  border-radius: 3px;
  font-size: ${props => props.theme.text.text200};
  box-shadow: ${props => props.theme.boxShadows.buttons};

  img {
    width: ${props => props.theme.pm.pm100};
    margin-right: ${props => props.theme.pm.pm100};
    display: inline-block;
  }
`
