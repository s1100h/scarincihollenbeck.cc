import styled from 'styled-components';
import {
  buttonHoverActive,
  buttonsHoverActive,
  globalColor,
  rem,
} from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';

export const AboutContainer = styled.section`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  width: 1650px;
  margin: 0 auto;
  margin-bottom: 150px;
  max-width: 96%;
  gap: 44px;

  .links-box {
    display: flex;
    gap: 60px;
  }

  ${media_breakpoint_exactly_down(820)} {
    margin-bottom: 70px;
  }

  ${media_breakpoint_down('sm')} {
    .links-box {
      gap: 2%;
    }
  }

  ${media_breakpoint_exactly_down(477)} {
    .links-box {
      flex-wrap: wrap;
      gap: 20px;
    }
  }
`;

export const AboutBox = styled.div`
  height: 400px;
  display: flex;
  gap: 44px;

  ${media_breakpoint_exactly_down(820)} {
    flex-direction: column;
    height: auto;
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

  ${buttonsHoverActive}

  :hover {
    color: ${globalColor.white};
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
    overflow-y: auto;

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
