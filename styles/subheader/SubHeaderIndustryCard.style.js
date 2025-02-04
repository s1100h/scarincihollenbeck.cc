import styled from "styled-components";
import { Title20, UnderlinedLink } from "styles/common/Typography.style";
import { globalBorderRadius, globalColor, rem } from "styles/global_styles/Global.styles";
import { media_breakpoint_down } from "styles/mediaBreakpoints.style";


export const Card = styled.div`
  display: flex;
  gap: 28px;
  color: ${globalColor.white};

  ${media_breakpoint_down('md')} {
    gap: 0;
    column-gap: 8px; 
    flex-wrap: wrap;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  ${media_breakpoint_down('md')} {
    display: contents;
  }
`;

export const CardTitle = styled(Title20)`
  margin: 0 0 4px 0;
  color: ${globalColor.blue.blue1000};

  ${media_breakpoint_down('md')} {
    width: calc(50% - 4px);
    align-self: center;
    margin: 0 0 12px 0;
    order: -2;
  }

  ${media_breakpoint_down('sm')} {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const CardDescription = styled.div`
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${rem(16)};

  * {
    margin: 0;
  }

  ${media_breakpoint_down('xxl')} {
    -webkit-line-clamp: 3;
  }

  ${media_breakpoint_down('md')} {
    min-width: 100%;
    font-size: ${rem(14)};
  }
`;

export const CardImage = styled.picture`
  min-width: 380px;
  min-height: 240px;
  border-radius: ${globalBorderRadius.middle};
  overflow: hidden;
  display: flex;
  position: relative;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${media_breakpoint_down('xxl')} {
    min-width: 320px;
    min-height: 200px;
  }

  ${media_breakpoint_down('md')} {
    min-width: auto;
    width: calc(50% - 4px);
    margin-bottom: 12px;
    order: -1;
    float: right;
  }

  ${media_breakpoint_down('sm')} {
    min-height: 110px;
  }
`;

export const CardLink = styled(UnderlinedLink)`
  margin-top: 35px;
  color: ${globalColor.white};
  font-size: ${rem(16)};

  ${media_breakpoint_down('xxl')} {
    margin-top: 32px;
  }

  ${media_breakpoint_down('md')} {
    margin-top: 16px;
    font-size: ${rem(14)};
  }
`;