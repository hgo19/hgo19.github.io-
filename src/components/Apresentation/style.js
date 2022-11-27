import styled from "styled-components";

export const ApresentationContainerStyled = styled.section`
  display: flex;
  justify-content: space-around;
  margin-left: 5%;
  margin-top: 2%;

  @media ( max-width : 1150px ) {
    margin-left: 5%;
  }
`;

export const ApresentationTextsStyled = styled.article`
  h1 {
    color: ${({theme}) => theme.titleColor};
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const MobileImageBoxStyled = styled.div`
  display: none;

  @media (max-width : 900px) {
    display: flex;
    justify-content: center;  
  }
`;

export const MobileImageStyled = styled.img`
  display: none;

  @media (max-width : 900px) {
    display: block;
    margin-top: 10%;
    width: 80%;
  }
`;

export const ApresentationLogosStyled = styled.div`
  display: flex;
  gap: 50px;
  margin-top: 50%;

    a {
      color: ${(theme) => theme.textColor};
      text-decoration: none;
    }

    a:hover {
      opacity: 0.7;
    }

    a:visited {
      color: ${(theme) => theme.textColor};
    }

    a:active {
      color: ${(theme) => theme.textColor};
    }

    a:-webkit-any-link {
      color: #000;
    }

    img {
      width: 20px;
    }

  @media (max-width : 900px) {
    justify-content: center;
    margin-top: 20%;
  }
`

export const ApresentationImgStyled = styled.img`
  width: 950px;

  @media ( max-width : 1150px ) {
    width: 700px;
  }

  @media (max-width : 900px) {
    display: none;
  }
`;