import { useEffect } from "react"
import Head from "next/head"
import { SITE_NAME, FOOTER_TEXT } from "../constants"
import styled from "styled-components"
import { GlobalStyleReset } from "../styles"
import data from "../data"
import numberFormatter from '../utils/numberFormatter'
import firstLCapitalize from '../utils/firstLCapitalize'

export const Home = () => {
  const {info:{total,search_term},item} = data
  useEffect(() => {
    console.log(['itemitem',item ])
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
            {item.map(({id,source,added,duration, description,picture,tag,pornstar})=> 
                <VideoItem key={id}>
                  <VideoImages >
                  {/* {picture.map(({id,path})=>
                   <img src={path} alt={path}/>
                  )} */}
                   <img src={picture[0].path} alt={picture[0].path}/>
                  </VideoImages>
                  {/* <div>{description}</div>
                 {pornstar.map((star)=>
                   <div>{star}</div>
                 )} */}
                 <VideoInfo>
                <div>Added: {added}</div>
                <div>Duration:{duration}</div>
                 </VideoInfo>
                 <VideoTitle>{description}</VideoTitle>
                 <VideoTags>
                   {tag.map((item,idx)=>
                   <VideoTagItem key={idx.toString()}>
                      {firstLCapitalize(item)}
                   </VideoTagItem>)}
                 </VideoTags>
                 <VideoBtnRow>
                   <VideoMoreBtn>More Info</VideoMoreBtn>
                   </VideoBtnRow>
                </VideoItem>
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
const VideoItem = styled.div`
  display:flex;
  width:100%;
  min-width:240px;
  max-width:320px;
  color:#fff;
  flex-direction:column;
`
const VideoImages = styled.div`
  display:flex;
  width:100%;
  height:200px;
`
const VideoInfo = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:space-between;
  font-size:10px;
  font-weight:400;
  margin-top:5px;
`
const VideoTitle = styled.div`
  display:flex;
  font-size:14px;
  font-weight:400;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin: 5px 0;
  align-items:center;
  display: inline-block;
`
const VideoTags = styled.div`
  display:flex;
  gap: 4px;
  margin-bottom: 15px;
  overflow:hidden;
`
const VideoTagItem = styled.div`
  padding:3px;
  border-radius: 4px;
  background: #646464;
  max-height:24px;
  text-align:center;
  display: inline-block;
  font-size:14px;

`
const VideoBtnRow = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:100%;
`
const VideoMoreBtn= styled.button`
background: #2C2C2F;
border-radius: 3px;
width:100%;
font-size:14px;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
border: none;
width:300px;
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