import firstLCapitalize from "../../utils/firstLCapitalize"
import useMedia from "use-media"
import {
  AdditionalRow,
  AdditionalLabel,
  Info,
  BtnRow,
  MoreBtn,
  ItemRoot,
  DescriptionWrapped,
  TagItem,
  TagList,
  CarouselContainer,
  PlayIcon,
  ModalWrapper,
} from "./styles"
import { playBtn } from "../icons"
import type { TMovieItem } from "../../types"
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
    name,
    source,
    description,
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
    quality,
  }: TMovieItem = video
  const isMobile = useMedia({ maxWidth: 480 })

  const tagsTypes = {
    cast: "#0e6d65",
    tag: "#5157a0",
    quality: "#15578d",
  }

  const getTagTypeColor = (type: string) => {
    if (tagsTypes[type]) {
      return tagsTypes[type]
    }
    return null
  }

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
        <Info activeAdditional={activeAdditional}>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Title:</AdditionalLabel>"{name}"
          </AdditionalRow>
          <AdditionalRow>
            <AdditionalLabel>Description:</AdditionalLabel>
            {activeAdditional ? (
              description
            ) : (
              <DescriptionWrapped>{description}</DescriptionWrapped>
            )}
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Duration:</AdditionalLabel>
            {duration}
          </AdditionalRow>
          {!!cast.length && (
            <AdditionalRow>
              <AdditionalLabel>Cast:</AdditionalLabel>
              {activeAdditional ? (
                <>
                  {cast.map(({ id, name }) => (
                    <TagItem
                      typeColor={getTagTypeColor("cast")}
                      key={id.toString()}
                    >
                      {firstLCapitalize(name)}
                    </TagItem>
                  ))}
                </>
              ) : (
                <TagList>
                  {cast.map(({ id, name }) => (
                    <TagItem
                      typeColor={getTagTypeColor("cast")}
                      key={id.toString()}
                    >
                      {firstLCapitalize(name)}
                    </TagItem>
                  ))}
                </TagList>
              )}
            </AdditionalRow>
          )}
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Country:</AdditionalLabel>
            {country}
          </AdditionalRow>
          <AdditionalRow>
            {" "}
            <AdditionalLabel>Quality:</AdditionalLabel>
            <TagItem typeColor={getTagTypeColor("quality")}>{quality}</TagItem>
          </AdditionalRow>
          {activeAdditional ? (
            <>
              {!!tags.length && (
                <AdditionalRow>
                  <AdditionalLabel>Tags:</AdditionalLabel>
                  <TagList>
                    {tags.map(({ id, label }) => (
                      <TagItem
                        typeColor={getTagTypeColor("tag")}
                        key={id.toString()}
                      >
                        {firstLCapitalize(label)}
                      </TagItem>
                    ))}
                  </TagList>
                </AdditionalRow>
              )}{" "}
              <AdditionalRow>
                {" "}
                <AdditionalLabel>Directed by:</AdditionalLabel>
                {directedBy}
              </AdditionalRow>
              <AdditionalRow>
                {" "}
                <AdditionalLabel>Produced by:</AdditionalLabel>
                {producedBy}
              </AdditionalRow>
              <AdditionalRow>
                {" "}
                <AdditionalLabel>Music by:</AdditionalLabel>
                {musicBy}
              </AdditionalRow>
              <AdditionalRow>
                {" "}
                <AdditionalLabel>Company:</AdditionalLabel>
                {company}
              </AdditionalRow>
              <AdditionalRow>
                {" "}
                <AdditionalLabel>Box office:</AdditionalLabel>
                {boxOffice} $
              </AdditionalRow>
              <AdditionalRow>
                {" "}
                <AdditionalLabel>Source:</AdditionalLabel>
                {source}
              </AdditionalRow>
            </>
          ) : null}
          <BtnRow>
            <MoreBtn onClick={handleAdditional}>
              {activeAdditional ? "Close Info" : "More Info"}
            </MoreBtn>
          </BtnRow>
          <BtnRow>
            <MoreBtn onClick={() => {}}>
              Play{" "}
              <PlayIcon viewBox="0 0 30 30" width={24} height={24}>
                {playBtn}
              </PlayIcon>
            </MoreBtn>
          </BtnRow>
        </Info>
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
          ssr={true}
          draggable={false}
          swipeable={true}
          infinite={true}
          autoPlay={activeVideo}
          autoPlaySpeed={1000}
          transitionDuration={300}
          arrows={false}
        >
          {images.map(({ id, src }) => (
            <ImgItemComponent src={src} alt={`${description}-${id}`} key={id} />
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
        <ModalWrapper>{renderContent()}</ModalWrapper>
      </ModalComponent>
    )
  }
  /** Check Cards View for modal */
  return activeAdditional && isMobile ? renderContentInModal() : renderContent()
}
export default VideoItem
