import { useEffect, useState } from "react"
import firstLCapitalize from "../../utils/firstLCapitalize"
import useMedia from "use-media"
import {
  VideoItemRoot,
  VideoInfo,
  VideoTitle,
  VideoTags,
  VideoTagItem,
  VideoBtnRow,
  VideoMoreBtn,
  AdditionalInfo,
  VideoItemRootInModal,
  VideoInfoAdditional,
  AdditionalRow,
  AdditionalLabel,
  VideoPornstarItem,
  VideWebcamItem,
} from "./styles"
import type { TVideoItem } from "../../types"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import dynamic from "next/dynamic"
const ModalComponent = dynamic(() => import("../Modal/ModalComponent"), {
  loading: () => <p>...</p>,
})
import ImgItemComponent from "../ImgItem/ImgItem"

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

  /**
   * Caroucel data
   */
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }
  /**
   * Render Info block (!Additional)
   */
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
  /**
   * Render Additional Info Block
   */
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
          <VideoBtnRow>
            <VideoMoreBtn onClick={handleAdditional}>Close Info</VideoMoreBtn>
          </VideoBtnRow>
        </VideoInfoAdditional>
      </>
    )
  }
  /**
   * Render Main Content Block
   */
  const renderContent = () => {
    return (
      <VideoItemRoot activeAdditional={activeAdditional} onClick={handleClick}>
        <Carousel
          responsive={responsive}
          ssr={false}
          draggable={false}
          swipeable={isMobile}
          infinite={true}
          autoPlay={activeVideo}
          arrows={false}
          autoPlaySpeed={1000}
          transitionDuration={200}
        >
          {picture.map(({ id, path }) => (
            <ImgItemComponent
              src={path}
              alt={`${description}-${id}`}
              key={id}
            />
          ))}
        </Carousel>
        {activeAdditional ? renderInfoAdditional() : renderInfoNormal()}
      </VideoItemRoot>
    )
  }
  //Render content method
  const renderContentInModal = () => {
    return (
      <ModalComponent
        isOpen={activeAdditional}
        onRequestClose={handleAdditional}
      >
        <VideoItemRootInModal
          activeAdditional={activeAdditional}
          onClick={handleClick}
        >
          {renderContent()}
        </VideoItemRootInModal>
      </ModalComponent>
    )
  }
  /** Check Cards View for modal */
  return activeAdditional && isMobile ? renderContentInModal() : renderContent()
}
export default VideoItem
