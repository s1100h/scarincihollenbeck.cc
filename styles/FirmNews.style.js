import styled from 'styled-components'
import { media_breakpoint_down } from './mediaBreakpoints.style'

const hoverLink = `
	&:hover {
		text-decoration: none;

		p {
			color: inherit;
		}
	}
`

export const NewsContainer = styled.section`
  width: 100vw;
  max-width: 96%;
  margin: 0 auto 150px;

  ${media_breakpoint_down('md')} {
    margin-bottom: 80px;
  }
`

export const TitleNews = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 72px;
  line-height: 1.2;
  color: #000000;
  font-family: 'Brand';
  text-transform: uppercase;
  margin-bottom: 30px;
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
  width: 40%;
  padding: 15px;
  box-shadow: -2px 0px 10px rgb(0 0 0 / 13%);
  margin-bottom: 20px;

  ${media_breakpoint_down('xl')} {
    width: 60%;
    a {
      span {
        width: 100% !important;
      }
    }
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
  }
`
export const OtherNewsBox = styled.div`
  width: 60%;
  ${media_breakpoint_down('xl')} {
    width: 40%;
    height: 73vh;
    overflow-y: auto;
    padding: 0 20px;
    background-color: whitesmoke;
  }

  ${media_breakpoint_down('lg')} {
    height: 70vh;
  }

  ${media_breakpoint_down('md')} {
    width: 100%;
    height: auto;
    overflow-y: none;
    background-color: transparent;
    padding: 0;
  }
`

export const OtherNews = styled(FreshNews)`
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
    }

    ${media_breakpoint_down('md')} {
      flex-direction: row;
      gap: 20px;
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
    font-size: 20px;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 40px;
  }

  p {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 1;
    color: rgba(0, 0, 0, 0.63);
  }
`

export const LinkContainer = styled.a`
  ${hoverLink}
`
export const ArticleNewsTitle = styled.h1`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 20px;
`
export const Expert = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.63);
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Bottom = styled.p`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.63);

  ${media_breakpoint_down('lg')} {
    flex-direction: column;
  }
`
