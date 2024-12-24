import styled from 'styled-components';
import { globalColor, rem } from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';

export const ArticleContainer = styled.article`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  font-size: ${({ props }) => (props?.size ? props.size : `${rem(24)}`)};
  font-weight: 600;
  margin-bottom: 10px;

  ${media_breakpoint_down('sm')} {
    text-align: center;
  }
`;

export const ArticleBody = styled.section`
  font-size: ${rem(18.4)};
  color: ${globalColor.gray.gray80};

  .awards-and-content {
    display: flex;
    word-break: break-all;
    align-items: start;

    a {
      width: 300px;
    }
  }

  ul {
    padding: 0;
    li {
      margin-bottom: 15px;
      ::before {
        content: '➤';
        margin-right: 10px;
      }
    }
  }
  ${media_breakpoint_down('md')} {
    .awards-and-content {
      flex-direction: column;
    }
    .content {
      font-size: ${rem(12.8)};
    }
  }
`;


export const ArticleContent = styled.section`
  padding: 60px 0;

  ${media_breakpoint_down('xxl')} {
    padding: 40px 0;
  }

  ${media_breakpoint_down('md')} {
    padding: 24px 0;
  }
`;

export const ArticleContentHolder = styled.div`
  display: flex;
  gap: 40px;

  ${media_breakpoint_down('xl')} {
    flex-direction: column;
  }

  ${media_breakpoint_down('md')} {
    gap: 32px;
  }
`;

export const ArticleContentSections = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media_breakpoint_down('md')} {
    gap: 32px;
  }
`;

export const ArticleContentSidebar = styled.div`
  width: 500px;

  ${media_breakpoint_down('xxl')} {
    width: 460px;
  }

  ${media_breakpoint_down('xl')} {
    width: 100%;
  }
`;