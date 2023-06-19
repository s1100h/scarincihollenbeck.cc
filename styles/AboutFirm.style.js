import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const AboutBox = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-flow: column;
  justify-content: space-between;
`;

export const AboutContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-around;
  width: 1650px;
  margin: 0 auto;
  margin-bottom: 150px;
  max-width: 96%;
  gap: 44px;

  ${media_breakpoint_down('md')} {
    grid-template-columns: auto;
    margin-bottom: 70px;
  }
`;

export const LinkButtonAbout = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 40px;
  background: ${globalColor.red.darkRed};
  font-weight: 700;
  color: ${globalColor.white};

  :hover {
    color: white;
    text-decoration: none;
  }

  :after {
    margin-left: 15px;
    content: url('/images/arrow_right.svg');
    width: 19px;
    height: 19px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutArticle = styled.article`
  display: flex;
  padding: 40px 75px 40px 50px;
  flex: 1;
  flex-flow: column;
  box-shadow: -2px 0 10px rgb(0 0 0 / 13%);

  h3 {
    font-weight: 600;
    font-size: ${rem(32)};
    line-height: 1.24;
    color: ${globalColor.black};
    margin-bottom: 24px;
  }

  ${media_breakpoint_down('lg')} {
    padding: 20px;
  }

  p {
    font-size: 1.1rem;

    strong {
      color: ${globalColor.red.darkRed};
      font-weight: bold;
    }
  }
`;

export const SubTitleAbout = styled.span`
  font-weight: 700;
  line-height: 1.24;
  margin-bottom: 7px;
  color: ${globalColor.red.darkRed};
`;
