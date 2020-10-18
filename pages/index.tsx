import { useEffect, useState } from "react"
import Head from "next/head"
import { SITE_NAME, FOOTER_TEXT } from "../constants"
import styled, { css } from "styled-components"
import { GlobalStyleReset } from "../styles"
import data from "../data"
import numberFormatter from "../utils/numberFormatter"
import type { TVideoItem } from "../types"
import useMedia from "use-media"
import useModal from "../utils/useModal"
import dynamic from "next/dynamic"
import LazyLoad from "react-lazyload-next"
import VideoItem from "../components/VideoItem/VideoItem"
const DynamicVideoItem = dynamic(
  () => import("../components/VideoItem/VideoItem"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
)
// const DynamicInfiniteGrid = dynamic(() => import("react-infinite-grid"), {
//   ssr: false,
//   loading: () => <p>...</p>,
// })

export const Home = () => {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeAdditional, setActiveAdditional] = useState(null)
  const { isShowing, toggle } = useModal()
  const isMobile = useMedia({ maxWidth: 480 })
  const {
    info: { total, search_term },
    item: videosArray,
  } = data
  // useEffect(() => {
  //   console.log(["isMobile", isMobile])
  // }, [isMobile])
  /**
   * ToggleActive video card method
   * @param param0
   */
  const toggleActive = ({ id }: TVideoItem) => {
    const isActiveVideo = activeVideo === id
    if (isActiveVideo) {
      setActiveVideo(null)
    } else {
      setActiveVideo(id)
    }
  }
  /**
   * Toggle Active additional info (More Info btn)
   * @param item
   */
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
      // if (!isMobile) {
      setActiveAdditional(id)
      // }
    }
  }
  /**
   * Getter Active video check
   * @param param0
   */
  const getActiveVideoState = ({ id }: TVideoItem) => {
    return activeVideo === id
  }
  /**
   * Getter Active Additional block check
   * @param param0
   */
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
              <LazyLoad
                height={320}
                offset={100}
                key={item.id}
                placeholder={<PlaceholderVideo />}
              >
                <DynamicVideoItem
                  video={item}
                  activeVideo={getActiveVideoState(item)}
                  activeAdditional={getActiveAdditional(item)}
                  handleClick={() => toggleActive(item)}
                  handleAdditional={() => toggleActiveAdditional(item)}
                />
                {/* <img src={item.picture[0].path} alt="" height="300" /> */}
              </LazyLoad>
            ))}
          </VideosList>
        </VideosContainer>
        <FooterRow>{FOOTER_TEXT}</FooterRow>
      </Container>
    </Wrapper>
  )
}
export default Home

const TestImgContainer = styled.div(
  (props) => css`
    height: 300px;
  `
)
const Wrapper = styled.div(
  (props) => css`
    display: flex;
    background-color: #000;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  `
)
const PlaceholderVideo = styled.div(
  (props) => css`
    height: 320px;
    min-height: 320px;
    width: 320px;
  `
)
const Container = styled.div(
  (props) => css`
    display: flex;
    width: 100%;
    max-width: 1340px;
    flex-direction: column;
  `
)

const HeaderRow = styled.header(
  (props) => css`
    color: #fff;
    align-items: center;
    justify-content: space-around;
    height: 74px;
    background: #424245;
    width: 100%;
    padding: 5px;
  `
)
const InfoRow = styled.div(
  (props) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    color: #fff;
    padding: 0 10px;
  `
)
const InfoTagLabel = styled.div(
  (props) => css`
    font-size: 20px;
  `
)

const InfoTotalLabel = styled.div(
  (props) => css`
    font-size: 14px;
  `
)

const H1Title = styled.h1(
  (props) => css`
    font-weight: 400;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 54px;
    line-height: 63px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  `
)
const MainTag = styled.span(
  (props) => css`
    text-transform: uppercase;
  `
)
const VideosContainer = styled.div(
  (props) => css`
    width: 100%;
    height: 100%;
    padding: 5px;
    background-color: #424245;
    /* overflow-y: auto; */
    & > .infiniteList {
      display: flex;
      gap: 10px;
      flex-flow: row wrap;
      min-height: 100vh;
    }
  `
)

const VideosList = styled.div(
  (props) => css`
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
)

const FooterRow = styled.footer(
  (props) => css`
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
)
