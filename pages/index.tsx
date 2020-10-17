import { useEffect } from "react"
import Head from "next/head"
import { SITE_NAME, FOOTER_TEXT } from "../constants"
import styled from "styled-components"
import { GlobalStyleReset } from "../styles"
import VideoItem from '../components/VideoItem/VideoItem'
import data from "../data"
import numberFormatter from '../utils/numberFormatter'


export const Home = () => {
  const {info:{total,search_term},item:videosArray} = data
  useEffect(() => {
    console.log(['videosArray',videosArray ])
  }, [])
  return (
    <Wrapper>
      <GlobalStyleReset />
      <Container>
        <HeaderRow>
          <H1Title>{SITE_NAME}</H1Title>
        </HeaderRow>
        <InfoRow>
          <InfoTagLabel>Best <MainTag>{search_term}</MainTag> porn videos</InfoTagLabel>
          <InfoTotalLabel>Total videos: {numberFormatter(total)} </InfoTotalLabel>
        </InfoRow>
        <VideosContainer>
          <VideosList>
            {videosArray.map((item)=> 
               <VideoItem key={item.id} video={item}></VideoItem>
            )}
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

const HeaderRow = styled.header`
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
  height: 50px;
  color: #fff;
  padding:0 10px;
`
const InfoTagLabel = styled.div`
 font-size:20px;
`

const InfoTotalLabel = styled.div`
   font-size:14px;
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
  gap: 10px;
  flex-flow: row wrap;
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