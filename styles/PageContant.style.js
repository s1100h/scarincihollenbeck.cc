import styled from 'styled-components'

export const ContentContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.125rem;
  line-height: 1.7;

  a {
    width: 100%;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  > {
    ul {
      margin-left: -1.5em;
    }

    h4 {
      &:first-child {
        font-weight: 900;
        background-color: #e9e9e9;
        padding: 10px;
        margin-bottom: 30px;
        font-size: 1.2rem;
      }

      font-weight: 900;
      background-color: #e9e9e9;
      padding: 10px;
      margin-bottom: 30px;
    }
  }

  > h3 {
    font-size: 1.4rem;
  }
`
