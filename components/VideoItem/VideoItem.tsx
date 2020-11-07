import { useEffect, useState } from "react"
import firstLCapitalize from "../../utils/firstLCapitalize"
import useMedia from "use-media"
import {
  AdditionalRow,
  AdditionalLabel,
  CastItem,
  Info,
  BtnRow,
  MoreBtn,
  InfoAdditional,
  ItemRoot,
  ItemRootInModal,
  DescriptionWrapped,
  TagItem,
  TagList,
  CarouselContainer,
  SliderIcon,
  PlayIcon,
} from "./styles"
import { playBtn } from "../icons"
import type { TVideoItem } from "../../types"
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
   *Render Item Content
   *
   * @param {*} activeAdditional
   * @return {*}
   */
  const renderInfoNormal = (activeAdditional) => {
    return (
      <>
        <Info>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Title:</AdditionalLabel>"{name}"
          </AdditionalRow>
          <AdditionalRow>
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
          {!!cast.length && (
            <AdditionalRow>
              <AdditionalLabel>Cast:</AdditionalLabel>
              <TagList>
                {cast.map(({ id, name }) => (
                  <TagItem key={id.toString()}>
                    {firstLCapitalize(name)}
                  </TagItem>
                ))}
              </TagList>
            </AdditionalRow>
          )}
          {!!tags.length && (
            <AdditionalRow>
              <AdditionalLabel>Tags:</AdditionalLabel>
              <TagList>
                {tags.map(({ id, label }) => (
                  <TagItem key={id.toString()}>
                    {firstLCapitalize(label)}
                  </TagItem>
                ))}
              </TagList>
            </AdditionalRow>
          )}
        </Info>
        <BtnRow>
          <MoreBtn onClick={handleAdditional}>
            {activeAdditional ? "Close Info" : "More Info"}
          </MoreBtn>
        </BtnRow>
        <BtnRow>
          <MoreBtn onClick={handleAdditional}>
            Play{" "}
            <PlayIcon viewBox="0 0 30 30" width={24} height={24}>
              {playBtn}
            </PlayIcon>
          </MoreBtn>
        </BtnRow>
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
        <CarouselContainer
          active={activeAdditional}
          responsive={responsive}
          ssr={false}
          draggable={false}
          swipeable={true}
          infinite={true}
          autoPlay={activeVideo}
          autoPlaySpeed={1000}
          transitionDuration={200}
          arrows={false}
        >
          {images.map(({ id, path }) => (
            <ImgItemComponent
              src={path}
              alt={`${description}-${id}`}
              key={id}
            />
          ))}
        </CarouselContainer>
        {renderInfoNormal(activeAdditional)}
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
