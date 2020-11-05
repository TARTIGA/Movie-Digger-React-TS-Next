import styled from "styled-components"

export const TestImgContainer = styled.div`
  height: 300px;
`
export const PlaceholderVideo = styled.div`
  height: 320px;
  min-height: 320px;
  width: 320px;
`

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  background: #a5a5a5;
  padding: 10px;
`

export const SearchInput = styled.input`
  padding: 0 10px;
  width: 100%;
  height: 48px;
  border: none;
  border: solid 1px #ccc;
  border-radius: 10px;
`

export const InfoRow = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  color: #fff;
  background: #737373;
  padding: 0 10px;
  justify-content: center;
`
export const InfoTagLabel = styled.div`
  font-size: 20px;
`

export const InfoTotalLabel = styled.div`
  font-size: 24px;
`

export const H1Title = styled.h1`
  font-weight: 400;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 3.2em;
  line-height: 63px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 768px) {
    font-size: 2.8em;
  }
  @media (max-width: 320px) {
    font-size: 2em;
  }
`
export const SearchTerm = styled.span`
  text-transform: uppercase;
`
export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px 5px;
  background-color: #424245;
  /* overflow-y: auto; */
  & > .infiniteList {
    display: flex;
    gap: 10px;
    flex-flow: row wrap;
    min-height: 100vh;
  }
`

export const List = styled.div`
  display: grid;
  gap: 15px;
  justify-content: center;
  grid-template-columns: 320px 320px 320px 320px;
  /* flex-flow: row wrap; */
  min-height: 100vh;
  @media (max-width: 768px) {
    grid-template-columns: 320px 320px;
  }
  @media (max-width: 480px) {
    grid-template-columns: 320px;
    gap: 5px;
  }
`

export const HeaderRow = styled.header`
  color: #fff;
  height: 120px;
  background: #3949ab;
  padding: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Content = styled.main`
  color: #fafafa;
  background: #000; //#fafafa
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const FooterRow = styled.footer`
  width: 100%;
  border-top: 1px solid gray;
  background: #000;
  display: flex;
  color: #fff;
  padding: 25px 5px;
  align-items: center;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`
