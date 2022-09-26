import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background: #381314;
  color: #fff;
  padding: 5vw 3vw 3vw 3vw;
  a {
    color: #fff;
  }
`

export const LinkTitle = styled.p`
  font-size: 20px;
  line-height: 12px;
  margin-bottom: 18px;
  display: inline-block;
`
export const LinkList = styled.ul`
  margin-left: -2.4em;
  list-style-type: none;

  + p {
    margin-top: 50px;
  }

  > li {
    margin-bottom: 15px;
  }
`

export const DetailsContainer = styled.div`
  width: 1650px;
  max-width: 96%;
  margin-top: 25px;
  border-top: 1.5px solid #aaaaaa;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const BottomLinks = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 24px;

  li {
    text-transform: none;
    border-bottom: 1.5px solid #aaaaaa;

    a:hover {
      text-decoration: none;
    }
  }
`
