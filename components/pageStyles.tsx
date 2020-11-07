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
  background: #3949ab;
  padding: 0 10px;
  justify-content: center;
`
export const InfoTagLabel = styled.div`
  font-size: 20px;
`

export const InfoTotalLabel = styled.div`
  font-size: 1em;
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
  margin-top: 20px;
  display: grid;
  gap: 15px;
  place-content: center center;
  grid-template-columns: repeat(auto-fill, 320px);
  min-height: 100vh;
  @media (max-width: 480px) {
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
  place-content: center center;
`
export const Content = styled.main`
  color: #fafafa;
  background: #000; //#fafafa
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
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
