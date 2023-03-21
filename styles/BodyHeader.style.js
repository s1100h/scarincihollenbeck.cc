import styled from 'styled-components'
import { buttonsHoverActive, globalColor, globalShadow, rem } from './global_styles/Global.styles'
import { media_breakpoint_down } from './mediaBreakpoints.style'

export const BodyHeaderContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 15px;
	background-color: ${globalColor.white};
	box-shadow: ${globalShadow.allSideShadow};
	gap: 3%;
	position: relative;
	top: -100px;
	
	form {
		margin: 0;
		width: 40%;
		input {
			height: 60px !important;
		}
	}
	
	.results-container {
    top: 53px;
    left: 0;
    transform: none;
	}
	
	${media_breakpoint_down('lg')} {
		form {
      input {
        height: 50px !important;
      }
		}

    ul {
      li {
        a {
          height: 50px;
					font-size: 1rem;
        }
      }
    }
	}
}

${media_breakpoint_down('md')} {
  flex-direction: column;
  gap: 10px;

  form {
    width: 100%;
  }
}

${media_breakpoint_down('sm')} {
	ul {
		flex-wrap: wrap;
		justify-content: center;
		
		li {
			width: 49%;
		}

     > :nth-child(-n+2) {
      margin-bottom: 10px;
    }
}

`

export const CategoriesLinks = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0;
  gap: 2%;
`

export const ButtonItem = styled.li`
  width: 80%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    padding: 19px 0;
    border: 1px solid ${globalColor.grayLite.grayLite90};
    color: ${globalColor.grayLite.grayLite90};
    font-size: ${rem(20)};
    ${({ page }) =>
      page.currentPage.includes(page.btnSlug) &&
      `
      	background-color: ${globalColor.red.darkRed}; 
      	color: ${globalColor.white};
      	`}
    ${buttonsHoverActive}
      : hover {
      color: white;
    }
  }
`
