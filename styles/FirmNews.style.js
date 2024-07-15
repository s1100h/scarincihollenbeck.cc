import styled from 'styled-components';
import {
  globalColor,
  rem,
  globalShadow,
  threeDots,
} from './global_styles/Global.styles';
import {
  media_breakpoint_down,
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

    h3 {
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

  h3 {
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