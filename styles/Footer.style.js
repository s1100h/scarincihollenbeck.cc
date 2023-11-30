import styled from 'styled-components';
import {
  ButtonLinkCss,
  buttonsHoverActive,
  globalColor,
} from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import { SubscribeBtn } from './Subscription.style';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  background-color: ${({ backgroundFooterColor }) =>
    backgroundFooterColor
      ? backgroundFooterColor
      : globalColor.red.darkBurgundy};
  color: ${globalColor.white};

  a {
    color: ${globalColor.white};
  }

  .footer-wrapper {
    display: flex;
    justify-content: center;
    padding: 30px 2% 40px 2%;
    width: 100%;
    flex-wrap: wrap;
    gap: 5%;

    > :nth-child(1) {
      order: 2;
      width: 59%;
    }
    > :nth-child(2) {
      order: 3;
      width: 21%;
    }
    > :nth-child(3) {
      order: 4;
    }

    ${media_breakpoint_exactly_down(1480)} {
      gap: 0;
      > :nth-child(1) {
        width: 74%;
      }
    }

    ${media_breakpoint_exactly_down(1400)} {
      > :nth-child(1) {
        li {
          width: max-content;
        }
      }
    }

    ${media_breakpoint_exactly_down(1250)} {
      gap: 0;
      > :nth-child(1) {
        width: 78%;
      }

      > :nth-child(2) {
        width: 78%;
      }

      > :nth-child(3) {
        section {
          section {
            margin-left: 18px;
          }
        }
      }
    }

    ${media_breakpoint_exactly_down(1250)} {
      > :nth-child(1) {
        width: 100%;
      }

      > :nth-child(2) {
        width: 100%;
      }
    }

    ${media_breakpoint_exactly_down(1080)} {
      justify-content: flex-start;
    }

    ${media_breakpoint_down('lg')} {
      > :nth-child(1) {
        flex-wrap: wrap;
      }
    }

    ${media_breakpoint_exactly_down(480)} {
      > :nth-child(1) {
        flex-direction: column;

        > :nth-child(1) {
          ul {
            margin-bottom: 0;
          }
        }
      }
      ul.list-without-title {
        margin-top: 0;
      }
    }
  }
`;

export const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 10%;

  div {
    width: 108px;
  }

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
  }
`;

export const BottomLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 24px;
  margin-top: 13px;
  padding-left: 0;
  margin-bottom: 0;

  li {
    text-transform: none;
    border-bottom: 1.5px solid #aaaaaa;

    a:hover {
      text-decoration: none;
      color: ${globalColor.white};
    }
  }
`;
export const Advertising = styled.article`
  display: flex;
  padding-top: 10px;
  margin-left: 0;
  margin-right: auto;

  ${media_breakpoint_down('sm')} {
    flex-direction: column;
    margin-left: 0;
  }

  section {
    display: flex;
    flex-direction: column;
    margin-left: 20px;

    ${media_breakpoint_down('sm')} {
      margin-left: 0;
    }
  }
  p {
    margin: 0;
  }
`;

export const ContactsContainer = styled.section`
  display: flex;
  flex-direction: column;
  h5 {
    width: 170px;
  }
  li {
    gap: 10px;
    svg {
      fill: ${globalColor.red.ultraLiteRed};
    }
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
    padding: 0;
    margin-top: 25px;
    justify-content: space-between;
  }
`;

export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;

  ${media_breakpoint_down('sm')} {
    min-width: auto;
  }
`;

export const LinkTitle = styled.h5`
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: 800;
`;
export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding-left: 0;
  list-style-type: none;

  > li {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    line-height: 24px;
    font-weight: 400;
  }
`;

export const SocialLinks = styled(LinkList)`
  min-width: 140px;
  li {
    a {
      display: flex;
      align-items: center;
      gap: 10px;
      ${media_breakpoint_down('sm')} {
        div {
          display: none;
        }
      }
    }
  }
`;

export const LinksSEOBox = styled.section`
  display: flex;
  gap: 5%;

  .list-without-title {
    margin-top: 30px;
  }

  @media print {
    display: none;
  }
`;

export const NavContainer = styled.section`
  display: flex;
  padding: 12px 13% 12px 9%;
  background-color: ${globalColor.white};
  justify-content: space-between;
  align-items: center;

  > div {
    color: ${globalColor.black};
  }

  .footer-subscription-btn {
    ${ButtonLinkCss};
    ${buttonsHoverActive};
    width: auto;
    padding: 15px 40px;

    svg {
      display: flex;
      fill: ${globalColor.white};
      margin-right: 8px;
    }

    ${media_breakpoint_exactly_down(992)} {
      width: auto;
      svg {
        display: flex;
      }
    }
  }

  ${media_breakpoint_exactly_down(1480)} {
    padding: 12px 4% 12px 4%;
  }

  ${media_breakpoint_exactly_down(1250)} {
    padding-left: 2%;
    padding-right: 2%;
  }

  ${media_breakpoint_exactly_down(855)} {
    flex-direction: column;
    align-items: flex-start;

    .footer-subscription-btn {
      margin-top: 20px;
    }
  }
`;
export const FooterNavigation = styled.nav`
  display: flex;
  width: 540px;

  ul {
    display: flex;
    gap: 5%;
    width: 100%;
    margin-bottom: 0;

    li {
      a {
        color: ${globalColor.red.darkBurgundy};

        :hover {
          color: ${globalColor.blue.dirtyBlue};
        }
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    width: auto;
    ul {
      flex-wrap: wrap;

      li {
        margin-bottom: 10px;
      }
    }
  }
`;
