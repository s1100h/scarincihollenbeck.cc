import styled from 'styled-components'

export const ContentContainer = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 1.125rem;
  line-height: 1.7;

  p {
    margin-bottom: 40px;
  }

  > {
    ul {
      margin-left: 0;
      padding-left: 0;
      li {
        line-height: 1.3;
        margin-bottom: 5px;

        a {
          width: 100%;
          overflow: hidden;
          display: inline-block;
          text-overflow: ellipsis;
          white-space: nowrap;

          ::before {
            content: '➤';
            margin-right: 5px;
          }
        }
      }
    }

    h4 {
      &:first-child {
        background-color: #e9e9e9;
        padding: 10px;
        margin-bottom: 30px;
        font-size: 1.2rem;
      }

      background-color: #e9e9e9;
      padding: 10px;
      margin-bottom: 15px;
    }
  }
`
