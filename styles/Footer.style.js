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

export const FooterWrapper = styled.footer`
  padding-top: 32px;
  background-color: ${({ backgroundFooterColor }) =>
    backgroundFooterColor ? backgroundFooterColor : globalColor.blue.darkBlue};
  color: ${globalColor.white};
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min(100%, 2188px);
  max-width: 100%;
  margin: 0 auto;

  a {
    color: ${globalColor.white};
  }

  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 40px 134px 32px;
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 60px;

    > :nth-child(1) {
      padding-left: 110px;
      order: 2;
      flex: 1;

      li {
        width: max-content;
      }
    }
    > :nth-child(2) {
      order: 3;
    }
    > :nth-child(3) {
      width: 100%;
      order: 4;
    }

    ${media_breakpoint_down('xxl')} {
      padding: 40px 120px 32px;
      > :nth-child(1) {
        padding-left: 0;
      }
    }

    ${media_breakpoint_down('xl')} {
      padding: 40px 32px 32px;
    }

    ${media_breakpoint_down('md')} {
      row-gap: 40px;
    }
  }
`;

export const DetailsContainer = styled.section`
  width: max-content;
  display: flex;
  align-items: flex-start;
  gap: 40px;

  ${media_breakpoint_down('md')} {
    width: 100%;
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
      fill: ${globalColor.blue.skyBlue};
    }
  }

  ${media_breakpoint_down('md')} {
    width: calc(50% - 20px);
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`;

export const ContactsBox = styled.div`
  display: flex;
  flex-direction: column;

  ${media_breakpoint_down('md')} {
    width: calc(50% - 20px);
  }

  ${media_breakpoint_down('sm')} {
    width: 100%;
  }
`;

export const LinkTitle = styled.h5`
  font-size: 1rem;
  margin-bottom: 8px;
  font-weight: 800;
`;
export const LinkList = styled.ul`
  margin: 0;
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

  .phone-mail-footer {
    border-bottom: 1px solid ${globalColor.white};

    :hover {
      color: ${globalColor.blue.lightBlue};
    }
  }
`;

export const SocialLinks = styled(LinkList)`
  li {
    a {
      display: flex;
      align-items: center;
      gap: 10px;

      svg {
        fill: ${globalColor.blue.skyBlue};
      }

      ${media_breakpoint_down('sm')} {
        div {
          display: none;
        }
      }
    }
  }
`;

export const LinksSEOBox = styled.section`
  display: grid;
  grid-template-columns: repeat(4, max-content);
  gap: 40px;

  .list-without-title {
    margin-top: 30px;
  }

  ${media_breakpoint_down('xxl')} {
    > :nth-child(2) {
      margin-top: -40px;
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
    .list-without-title {
      margin-top: 0;
    }
  }

  ${media_breakpoint_down('md')} {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media print {
    display: none;
  }
`;

export const NavContainer = styled.section`
  display: flex;
  padding: 12px 134px 12px 244px;
  background-color: ${globalColor.white};
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  > div {
    color: ${globalColor.black};
  }

  .footer-subscription-btn {
    ${ButtonLinkCss};
    ${buttonsHoverActive};
    width: auto;
    padding: 15px 40px;
    flex-shrink: 0;

    svg {
      display: flex;
      fill: ${globalColor.white};
      margin-right: 8px;
    }

    ${media_breakpoint_exactly_down(992)} {
      width: auto;
      svg {
        width: auto;
        height: auto;
      }
    }
  }

  ${media_breakpoint_down('xxl')} {
    padding: 12px 120px;
  }

  ${media_breakpoint_down('xl')} {
    padding: 12px 32px;
  }

  ${media_breakpoint_exactly_down(855)} {
    align-items: flex-start;
  }
`;
export const FooterNavigation = styled.nav`
  display: flex;
  width: 644px;

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

  ${media_breakpoint_down('md')} {
    width: auto;
    ul {
      flex-wrap: wrap;

      li {
        margin-bottom: 10px;
      }
    }
  }
`;
