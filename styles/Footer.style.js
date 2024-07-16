import styled from 'styled-components';
import {
  globalColor,
  globalTransition,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const FooterWrapper = styled.footer`
  padding-top: 12px;
  background-color: ${({ backgroundFooterColor }) =>
    backgroundFooterColor ? backgroundFooterColor : globalColor.blue.darkBlue};
  color: ${globalColor.white};
`;

export const FooterHolder = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  row-gap: 60px;

  a {
    color: ${globalColor.white};
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  column-gap: 40px;
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

export const LinksSEOBox = styled.section`
  display: flex;
  gap: 40px;

  @media print {
    display: none;
  }
`;

export const FooterDoubleColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const LinkTitle = styled.h3`
  margin: 0;
  color: ${globalColor.white};
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 600;
`;

export const LinkList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > li {
    display: inline-flex;
    align-items: center;
    column-gap: 8px;

    > a {
      transition: ${globalTransition.default};

      &:hover {
        color: ${globalColor.blue.skyBlue};
      }
    }

    > svg {
      flex-shrink: 0;
    }
  }

  .phone-mail-footer {
    display: inline-flex;
    align-items: center;
    column-gap: 8px;

    > span {
      border-bottom: 1px solid ${globalColor.white};
    }

    :hover {
      color: ${globalColor.blue.skyBlue};
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

export const NavWrapper = styled.div`
  background-color: ${globalColor.white};
`;

export const NavHolder = styled.section`
  padding: 12px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 20px;
  row-gap: 12px;

  > div {
    color: ${globalColor.black};
  }

  .footer-subscription-btn {
    flex-shrink: 0;

    > span {
      padding: 8px 28px;
    }

    svg {
      width: 24px;
      height: 24px;
      display: flex;
      fill: ${globalColor.white};
    }

    ${media_breakpoint_down('md')} {
      align-self: flex-start;
      order: -1;
    }
  }

  ${media_breakpoint_down('md')} {
    flex-direction: column;
  }
`;

export const FooterNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  ul {
    width: 100%;
    margin-bottom: 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 32px;
    row-gap: 16px;

    ${media_breakpoint_down('md')} {
      gap: 16px;
    }

    li {
      a {
        color: ${globalColor.blue.darkBlue};
        font-size: ${rem(18)};
        line-height: 1.56;
        font-weight: 500;
        transition: ${globalTransition.default};

        :hover {
          color: ${globalColor.blue.dirtyBlue};
        }

        ${media_breakpoint_down('md')} {
          font-size: 1rem;
          line-height: 1.5;
        }
      }

      ${media_breakpoint_down('md')} {
        width: calc((100% - 16px) / 2);
      }
    }
  }
`;
