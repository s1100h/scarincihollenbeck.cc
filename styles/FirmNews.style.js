import styled from 'styled-components'
import { globalColor, rem } from './global_styles/Global.styles'
import { media_breakpoint_down, media_breakpoint_exactly_down } from './mediaBreakpoints.style'

const hoverLink = `
	&:hover {
		text-decoration: none;
    color: inherit;
		p {
			color: inherit;
		}
	}
`

const newsCommonStyles = `
  padding: 15px;
  box-shadow: -2px 0px 10px rgb(0 0 0 / 13%);
  margin-bottom: 20px;
`

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
`

export const TitleNews = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1.2;
  color: ${globalColor.black};
  font-family: 'Brand';
  text-transform: uppercase;
  margin-bottom: 30px;

  ${media_breakpoint_down('md')} {
    font-size: 48px;
    text-align: center;
  }
`

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
`

export const FreshNews = styled.article`
  ${newsCommonStyles}
  width: 40%;
  a {
    span {
      width: 100% !important;
    }
  }

  ${media_breakpoint_down('xl')} {
    width: 60%;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
    a {
      div {
        width: 40%;
      }
    }

    ${media_breakpoint_down('sm')} {
      a {
        div {
          width: 100%;
        }
      }
    }
  }
`
export const OtherNewsBox = styled.div`
  width: 60%;
  ${media_breakpoint_down('xl')} {
    width: 40%;
    height: 52vh;
    overflow-y: auto;
    padding: 0 20px;
    background-color: whitesmoke;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
    height: auto;
    overflow-y: none;
    background-color: transparent;
    padding: 15px 5px;
  }

  ${media_breakpoint_down('sm')} {
    padding: 15px 30px;
  }

  ${media_breakpoint_exactly_down('400px')} {
    padding: 15px 5px;
  }
`

export const OtherNews = styled.article`
  ${newsCommonStyles}
  width: 100%;
  a {
    display: grid;
    height: 100%;
    grid-template-columns: 38% 58%;
    justify-content: space-between;
    object-fit: cover;

    ${hoverLink}

    ${media_breakpoint_down('xl')} {
      display: flex;
      flex-direction: column;

      span {
        width: 100% !important;
      }
    }

    ${media_breakpoint_down('md')} {
      flex-direction: row;
      gap: 20px;
    }

    ${media_breakpoint_down('sm')} {
      flex-direction: column;
    }
  }

  transition: 0.8s;
  :hover {
    box-shadow: -2px 0px 18px rgb(99 98 98 / 90%);
  }
`

export const TextNews = styled.section`
  display: flex;
  flex-flow: column;
  justify-content: space-between;

  h2 {
    font-weight: 600;
    font-size: ${rem(24)};
    line-height: 1.2;
    color: ${globalColor.black};
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
      margin-bottom: 20px;
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
`

export const LinkContainer = styled.a`
  ${hoverLink}
`
export const ArticleNewsTitle = styled.h1`
  font-weight: 600;
  font-size: ${rem(27)};
  line-height: 1.3;
  color: ${globalColor.black};
  margin-top: 27px;
  margin-bottom: 20px;
`
export const Expert = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  color: ${globalColor.gray.gray70};
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 30px;
`

export const Bottom = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${globalColor.gray.gray100};
  margin-bottom: 0;

  ${media_breakpoint_down('lg')} {
    flex-direction: column;
  }
`
