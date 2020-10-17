import { useEffect, useState } from "react"
import firstLCapitalize from "../../utils/firstLCapitalize"
import {
  VideoItemRoot,
  VideoInfo,
  VideoTitle,
  VideoTags,
  VideoTagItem,
  VideoBtnRow,
  VideoMoreBtn,
  AdditionalInfo,
  VideoInfoAdditional,
  AdditionalRow,
  AdditionalLabel,
  VideoPornstarItem,
  VideWebcamItem,
} from "./styles"
// import Slider from "react-slick-ssr"
import type { TVideoItem } from "../../types"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import useMedia from "use-media"
import ModalComponent from "../Modal/ModalComponent"

export const VideoItem = ({
  video,
  activeVideo,
  activeAdditional,
  handleClick,
  handleAdditional,
}) => {
  const {
    id,
    source,
    added,
    duration,
    description,
    picture,
    tag,
    pornstar,
    webcam,
  }: TVideoItem = video
  const isMobile = useMedia({ maxWidth: 480 })
  useEffect(() => {
    console.log(["active", activeVideo])
  }, [activeVideo])

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  //render Normal InfoState
  const renderInfoNormal = () => {
    return (
      <>
        <VideoInfo>
          <div>Added: {added}</div>
          <div>Duration:{duration}</div>
        </VideoInfo>
        <VideoTitle>{description}</VideoTitle>
        <VideoTags>
          {tag.map((item, idx) => (
            <VideoTagItem key={idx.toString()}>
              {firstLCapitalize(item)}
            </VideoTagItem>
          ))}
        </VideoTags>
        <VideoBtnRow>
          <VideoMoreBtn onClick={handleAdditional}>More Info</VideoMoreBtn>
        </VideoBtnRow>
      </>
    )
  }
  //render Additional InfoState
  const renderInfoAdditional = () => {
    return (
      <>
        <VideoInfoAdditional>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Added:</AdditionalLabel>
            {added}
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Duration:</AdditionalLabel>
            {duration}
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Source:</AdditionalLabel>
            {source}
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Description:</AdditionalLabel>
            {description}
          </AdditionalRow>
          {!!tag.length && (
            <AdditionalRow>
              {" "}
              <AdditionalLabel>Tags:</AdditionalLabel>
              {tag.map((item, idx) => (
                <VideoTagItem key={idx.toString()}>
                  {firstLCapitalize(item)}
                </VideoTagItem>
              ))}
            </AdditionalRow>
          )}
          {!!pornstar.length && (
            <AdditionalRow>
              {" "}
              <AdditionalLabel>Pornstars:</AdditionalLabel>
              {pornstar.map((item, idx) => (
                <VideoPornstarItem key={idx.toString()}>
                  {firstLCapitalize(item)}
                </VideoPornstarItem>
              ))}
            </AdditionalRow>
          )}
          {!!webcam.length && (
            <AdditionalRow>
              {" "}
              <AdditionalLabel>Webcam Model:</AdditionalLabel>
              {webcam.map((item, idx) => (
                <VideWebcamItem key={idx.toString()}>
                  {firstLCapitalize(item)}
                </VideWebcamItem>
              ))}
            </AdditionalRow>
          )}
        </VideoInfoAdditional>
      </>
    )
  }
  //Render ALL  content
  const renderContent = () => {
    return (
      <VideoItemRoot activeAdditional={activeAdditional} onClick={handleClick}>
        <Carousel
          responsive={responsive}
          ssr={true}
          swipeable={false}
          infinite={true}
          autoPlay={activeVideo}
          autoPlaySpeed={1000}
          transitionDuration={200}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
        >
          {picture.map(({ id, path }) => (
            <img src={path} alt={path} key={id} />
          ))}
        </Carousel>
        {activeAdditional ? renderInfoAdditional() : renderInfoNormal()}
      </VideoItemRoot>
    )
  }

  return renderContent()
}
export default VideoItem
