import { useEffect, useState } from "react"
import Head from "next/head"
import { SITE_NAME, FOOTER_TEXT } from "../constants"
import styled from "styled-components"
import { GlobalStyleReset } from "../styles"
import VideoItem from "../components/VideoItem/VideoItem"
import data from "../data"
import numberFormatter from "../utils/numberFormatter"
import type { TVideoItem } from "../types"
import useMedia from "use-media"
import useModal from "../utils/useModal"
import ModalComponent from "../components/Modal/ModalComponent"

export const Home = () => {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeAdditional, setActiveAdditional] = useState(null)
  const { isShowing, toggle } = useModal()
  const isMobile = useMedia({ maxWidth: 480 })
  const {
    info: { total, search_term },
    item: videosArray,
  } = data
  useEffect(() => {
    console.log(["isMobile", isMobile])
  }, [isMobile])

  const toggleActive = ({ id }: TVideoItem) => {
    const isActiveVideo = activeVideo === id
    if (isActiveVideo) {
      setActiveVideo(null)
    } else {
      setActiveVideo(id)
    }
  }

  const toggleActiveAdditional = (item) => {
    toggleActive(item)
    if (isMobile) {
      toggle()
    }
    const { id } = item
    const isActiveAdditional = activeVideo === id
    if (isActiveAdditional) {
      setActiveAdditional(null)
    } else {
      if (!isMobile) {
        setActiveAdditional(id)
      }
    }
  }
  const getActiveVideoState = ({ id }: TVideoItem) => {
    return activeVideo === id
  }
  const getActiveAdditional = ({ id }: TVideoItem) => {
    return activeAdditional === id
  }
  return (
    <Wrapper>
      <GlobalStyleReset />
      <Container>
        <HeaderRow>
          <H1Title>{SITE_NAME}</H1Title>
        </HeaderRow>
        <InfoRow>
          <InfoTagLabel>
            Best <MainTag>{search_term}</MainTag> porn videos
          </InfoTagLabel>
          <InfoTotalLabel>
            Total videos: {numberFormatter(total)}{" "}
          </InfoTotalLabel>
        </InfoRow>
        <VideosContainer>
          <VideosList>
            {videosArray.map((item: TVideoItem) => (
              <VideoItem
                key={item.id}
                video={item}
                activeVideo={getActiveVideoState(item)}
                activeAdditional={getActiveAdditional(item)}
                handleClick={() => toggleActive(item)}
                handleAdditional={() => toggleActiveAdditional(item)}
              />
            ))}
          </VideosList>
        </VideosContainer>
        <FooterRow>{FOOTER_TEXT}</FooterRow>
      </Container>
      <ModalComponent isOpen={isShowing} onRequestClose={toggle}>
        111111111111111
      </ModalComponent>
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
  height: 100%;
`
const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1340px;
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
  padding: 0 10px;
`
const InfoTagLabel = styled.div`
  font-size: 20px;
`

const InfoTotalLabel = styled.div`
  font-size: 14px;
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
  text-transform: uppercase;
`
const VideosContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: #424245;
  /* overflow-y: auto; */
`

const VideosList = styled.div`
  display: flex;
  gap: 10px;
  flex-flow: row wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const FooterRow = styled.footer`
  background: #000;
  display: flex;
  width: 100%;
  color: #fff;
  padding: 25px 5px;
  align-items: center;
  font-size: 14px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
