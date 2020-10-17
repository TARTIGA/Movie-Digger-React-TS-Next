import { useEffect, useState } from "react"
import firstLCapitalize from "../../utils/firstLCapitalize"
import {
  VideoItemRoot,
  VideoImages,
  VideoInfo,
  VideoTitle,
  VideoTags,
  VideoTagItem,
  VideoBtnRow,
  VideoMoreBtn,
  AdditionalInfo,
} from "./styles"
// import Slider from "react-slick-ssr"
import type { TVideoItem } from "../../types"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

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
  }: TVideoItem = video

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
      {activeAdditional && <AdditionalInfo>111</AdditionalInfo>}
    </VideoItemRoot>
  )
}
export default VideoItem
