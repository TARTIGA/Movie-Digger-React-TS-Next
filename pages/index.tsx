import { useEffect } from "react"
import Head from "next/head"
import { SITE_NAME } from "../constants"
import styled from "styled-components"
import { GlobalStyleReset } from "../styles"
import data from "../data"

export const Home = () => {
  useEffect(() => {}, [])
  const TAG = "BUSTY"
  const VIDEO_COUNT = 1102304
  return (
    <Wrapper>
      <GlobalStyleReset />
      <Container>
        <HeaderRow>
          <H1Title>{SITE_NAME}</H1Title>
        </HeaderRow>
        <InfoRow>
          <div>Best {TAG} porn videos</div>
          <div>Total videos: {VIDEO_COUNT} </div>
        </InfoRow>
        <VideosContainer></VideosContainer>
      </Container>
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.div`
  display: flex;
  background-color: #000;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1340px;
  height: 100vh;
  flex-direction: column;
`
const HeaderRow = styled.div`
  color: #fff;
  align-items: center;
  justify-content: space-around;
  height: 74px;
  background: #424245;
  width: 100%;
  padding: 5px;
`
const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  color: #fff;
`

const VideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: red;
`
const H1Title = styled.h1`
  font-weight: 400;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 54px;
  line-height: 63px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
