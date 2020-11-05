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
  VideoActorItem,
  VideWebcamItem,
  CastItem,
  Info,
  BtnRow,
  MoreBtn,
  InfoAdditional,
  ItemRoot,
  ItemRootInModal,
  DescriptionWrapped,
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
    name,
    source,
    description,
    downloaded,
    duration,
    country,
    directedBy,
    producedBy,
    musicBy,
    company,
    boxOffice,
    cast,
    images,
    tags,
  }: any = video
  const isMobile = useMedia({ maxWidth: 480 })

  /**
   * Carousell init params
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
   *Render Info block (!Additional)
   *
   * @return {*}
   */
  const renderInfoNormal = () => {
    return (
      <>
        <Info>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Title:</AdditionalLabel>"{name}"
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Description:</AdditionalLabel>
            <DescriptionWrapped>{description}</DescriptionWrapped>
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Duration:</AdditionalLabel>
            {duration}
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Country:</AdditionalLabel>
            {country}
          </AdditionalRow>
        </Info>
        {/* <VideoTags>
          {tag.map((item, idx) => (
            <VideoTagItem key={idx.toString()}>
              {firstLCapitalize(item)}
            </VideoTagItem>
          ))}
        </VideoTags> */}
        <BtnRow>
          <MoreBtn onClick={handleAdditional}>More Info</MoreBtn>
        </BtnRow>
      </>
    )
  }
  /**
   *Render Additional Info Block
   *
   * @return {*}
   */
  const renderInfoAdditional = () => {
    return (
      <>
        <InfoAdditional>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Added:</AdditionalLabel>
            {downloaded}
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
          {/* {!!tag.length && (
            <AdditionalRow>
              {" "}
              <AdditionalLabel>Tags:</AdditionalLabel>
              {tag.map((item, idx) => (
                <VideoTagItem key={idx.toString()}>
                  {firstLCapitalize(item)}
                </VideoTagItem>
              ))}
            </AdditionalRow>
          )} */}
          {/* {!!cast.length && (
            <AdditionalRow>
              {" "}
              <AdditionalLabel>Actors:</AdditionalLabel>
              {cast.map((item, idx) => (
                <CastItem key={idx.toString()}>
                  {firstLCapitalize(item)}
                </CastItem>
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
          )} */}
          <BtnRow>
            <MoreBtn onClick={handleAdditional}>Close Info</MoreBtn>
          </BtnRow>
        </InfoAdditional>
      </>
    )
  }
  /**
   *Render Main Content Block
   *
   * @return {*}
   */
  const renderContent = () => {
    return (
      <ItemRoot activeAdditional={activeAdditional} onClick={handleClick}>
        {/* <Carousel
          responsive={responsive}
          ssr={false}
          draggable={false}
          swipeable={true}
          infinite={true}
          autoPlay={activeVideo}
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
        </Carousel> */}
        {activeAdditional ? renderInfoAdditional() : renderInfoNormal()}
      </ItemRoot>
    )
  }
  /**
   *Render content in Modal method
   *
   * @return {*}
   */
  const renderContentInModal = () => {
    return (
      <ModalComponent
        isOpen={activeAdditional}
        onRequestClose={handleAdditional}
      >
        <ItemRootInModal
          activeAdditional={activeAdditional}
          onClick={handleClick}
        >
          {renderContent()}
        </ItemRootInModal>
      </ModalComponent>
    )
  }
  /** Check Cards View for modal */
  return activeAdditional && isMobile ? renderContentInModal() : renderContent()
}
export default VideoItem
