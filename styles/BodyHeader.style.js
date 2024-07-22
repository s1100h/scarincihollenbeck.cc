import styled from 'styled-components';
import {
  buttonsHoverActive,
  globalColor,
  globalShadow,
  rem,
} from './global_styles/Global.styles';
import { media_breakpoint_down } from './mediaBreakpoints.style';
import { SearchableItemText, SearchableItemTitle, SearchedItem, SearchedItemIcon } from './Hit.style';

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

  .search-result-container {
    top: 100%;
    background-color: #fcfaff;

    ${SearchedItem} {
      border-radius: 0;
      border-color: ${globalColor.grayLite.grayLite40};

      &:hover {
        background-color: ${globalColor.gray.gray10};

        ${SearchedItemIcon} {
          color: ${globalColor.blue.darkBlue};
        }
      }
    }

    ${SearchableItemTitle} {
      color: ${globalColor.blue.darkBlue};
    }

    ${SearchableItemText} {
      color: ${globalColor.gray.gray500};
    }

    .ais-Pagination {
      .ais-Pagination-item--nextPage {

      }
      .ais-Pagination-list {
        .ais-Pagination-item {
          a.ais-Pagination-link {

            &:not(.ais-Pagination-link--selected) {
              &:hover {
                background-color: ${globalColor.gray.gray10};
                color: ${globalColor.blue.blue600};

                &::after {
                  background-color: ${globalColor.gray.gray10};
                  color: ${globalColor.blue.blue600};
                }
              }
            }
          }
        }
      } 
      
      .ais-Pagination-link {
        &::after {
          background-color: #fcfaff;
          color: ${globalColor.gray.gray130};
        }
      }
    }

    ${media_breakpoint_down('sm')} {
      border-radius: 0;
      width: 100%;
      margin-left: 0;
    }
  }

	
	${media_breakpoint_down('lg')} {
		form {
      input {
        height: 50px !important;
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
`;

export const CategoriesLinks = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 0;
  gap: 2%;

  ${media_breakpoint_down('sm')} {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

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
    ${({ page }) => page.currentPage.includes(page.btnSlug) &&
      `
        background-color: ${globalColor.red.darkRed}; 
        color: ${globalColor.white};
      `};
    
    ${buttonsHoverActive} {
      &:hover {
        color: white;
      }
    }

    ${media_breakpoint_down('lg')} {
      font-size: 1rem;
      height: 50px;
    }
  }

  ${media_breakpoint_down('sm')} {
    width: 49%;

    > :nth-child(-n+2) {
      margin-bottom: 10px;
    }
  }
`;
