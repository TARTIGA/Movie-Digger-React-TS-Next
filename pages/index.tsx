import { useEffect } from "react"
import Head from "next/head"
import { SITE_NAME, FOOTER_TEXT } from "../constants"
import styled from "styled-components"
import { GlobalStyleReset } from "../styles"
import data from "../data"
import numberFormatter from '../utils/numberFormatter'

export const Home = () => {
  const {info:{total,search_term},item} = data
  useEffect(() => {}, [])
  return (
    <Wrapper>
      <GlobalStyleReset />
      <Container>
        <HeaderRow>
          <H1Title>{SITE_NAME}</H1Title>
        </HeaderRow>
        <InfoRow>
          <div>Best <MainTag>{search_term}</MainTag> porn videos</div>
          <div>Total videos: {numberFormatter(total)} </div>
        </InfoRow>
        <VideosContainer>
          <VideosList>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
            <VideItem></VideItem>
          </VideosList>
        </VideosContainer>
        <FooterRow>
	       {FOOTER_TEXT}
        </FooterRow>
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
  flex-direction: column;
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
  padding:0 10px;
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
const MainTag = styled.span`
 text-transform:uppercase;
`
const VideosContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding:5px;
  background-color:#424245;
  overflow-y:auto;
`
const VideosList = styled.div`
  display:flex;
  flex-wrap: wrap;
  flex-direction:row;
  gap: 10px;
`
const VideItem = styled.div`
  display:flex;
  height:200px;
  width:320px;
  background-color:#000;
`

const FooterRow = styled.footer`
   background: #000;
   display:flex;
   width:100%;
   color:#fff;
   padding:5px;
   align-items:center;
   font-size:14px;
`