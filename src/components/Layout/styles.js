import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  margin-top: 16px;
  padding: 16px;
  border-radius: 4px;

  a {
    text-decoration: none;
    font-size: 20px;
    line-height: 100%;
    color: #fff;

    & + a {
      margin-left: 16px;
    }

    :hover {
      text-decoration: underline;
    }
  }
`;
