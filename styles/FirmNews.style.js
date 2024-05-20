import styled from 'styled-components';
import {
  globalColor,
  rem,
  globalShadow,
  threeDots,
} from './global_styles/Global.styles';
import {
  media_breakpoint_down,
  media_breakpoint_exactly_down,
} from './mediaBreakpoints.style';
import Link from 'next/link';

const hoverLink = `
	&:hover {
		text-decoration: none;
    color: inherit;
    cursor: pointer;
		p {
			color: inherit;
		}
	}
`;

const newsCommonStyles = `
  padding: 15px;
  box-shadow: -2px 0 10px rgb(0 0 0 / 13%);
  margin-bottom: 20px;
`;

export const NewsContainer = styled.section`
  width: 1650px;
  max-width: 96%;
  margin: 0 auto 150px;

  ${media_breakpoint_down('md')} {
    margin-bottom: 80px;
  }

  ${media_breakpoint_down('md')} {
    margin-bottom: 40px;
  }
`;

export const TitleNews = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1.2;
  color: ${globalColor.black};
  text-transform: uppercase;
  margin-bottom: 30px;
  ${threeDots(3)}

  ${media_breakpoint_down('md')} {
    font-size: 48px;
    text-align: center;
  }
`;

export const NewsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;

  ${media_breakpoint_down('xl')} {
    gap: 20px;
  }

  ${media_breakpoint_down('md')} {
    flex-direction: column;
  }
`;

export const FreshNews = styled.article`
  ${newsCommonStyles};
  flex: 1;
  margin: 0;

  ${media_breakpoint_down('lg')} {
    a {
      span {
        width: 100% !important;
      }
    }
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
  }
`;
export const OtherNewsBox = styled.div`
  width: 60%;

  > article {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${media_breakpoint_down('xl')} {
    width: 40%;
    max-height: 660px;
    height: 100%;
    overflow: auto;
    padding: 10px 20px;
    margin: -10px 0;
    background-color: ${globalColor.graySmoke.extraLiteWhiteSmoke};
  }

  ${media_breakpoint_down('lg')} {
    max-height: 620px;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
    height: auto;
    max-height: 100%;
    overflow-y: visible;
    background-color: transparent;
    padding: 15px 5px;
  }

  ${media_breakpoint_down('sm')} {
    padding: 15px 30px;
  }

  ${media_breakpoint_exactly_down(400)} {
    padding: 15px 5px;
  }
`;

export const OtherNews = styled.article`
  ${newsCommonStyles};
  width: 100%;
  position: relative;

  a {
    :hover {
      color: ${globalColor.black};
    }
  }

  .news-card-footer {
    a {
      position: relative;
      z-index: 2;
    }
  }

  .link-wrapper {
    display: grid;
    height: 100%;
    grid-template-columns: 38% 58%;
    justify-content: space-between;
    object-fit: cover;
    color: ${globalColor.black};
    ${hoverLink};

    ${(props) =>
      props?.isVertical &&
      `
      display: flex;
      flex-direction: column;

      h2 {
        margin-bottom: 20px;
      }
    `}

    h2 {
      font-size: ${(props) => (props?.isVertical ? rem(20) : rem(18))};
      ${threeDots(3)};
      margin-top: 10px;
    }

    ${media_breakpoint_down('xl')} {
      display: flex;
      flex-direction: column;
    }

    ${media_breakpoint_down('md')} {
      flex-direction: ${(props) => (props?.isProfile ? 'row' : 'column')};
      gap: 20px;
    }

    ${media_breakpoint_down('sm')} {
      flex-direction: column;
    }
  }

  transition: 0.8s;
  :hover {
    box-shadow: ${globalShadow.hoveredShadow};
  }
`;

export const NewsLink = styled(Link)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;
export const TextNews = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  h2 {
    font-weight: 600;
    color: ${globalColor.black};
    margin-bottom: 0;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    color: rgba(0, 0, 0, 0.63);
    margin-bottom: 0;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;

    h2 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`;
export const ArticleDescription = styled.section`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 8px;
  
  > p {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;
export const BottomSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 0.35rem;

    ${media_breakpoint_down('sm')} {
      display: block;
    }
  }

  ul {
    li {
      a {
        display: flex;
        color: ${globalColor.blue.dirtyBlue};
        :hover {
          color: ${globalColor.red.darkRed};
        }
      }
    }
  }

  ${media_breakpoint_down('sm')} {
    display: block;
  }
`;

export const LinkContainer = styled.a`
  ${hoverLink}
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const ArticleNewsTitle = styled.h1`
  font-weight: 600;
  font-size: ${rem(27)};
  line-height: 1.3;
  color: ${globalColor.black};
  margin-top: 27px;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const Expert = styled.div`
  font-size: 1.3rem;
  line-height: 1.5;
  color: ${globalColor.gray.gray70};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 30px;
`;

export const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.2rem;
  color: ${globalColor.gray.gray100};
  margin-bottom: 0;
  margin-top: auto;

  ${media_breakpoint_down('lg')} {
    flex-direction: column;
  }
`;
