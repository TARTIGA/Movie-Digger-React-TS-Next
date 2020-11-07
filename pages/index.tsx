import React, { useEffect, useState } from "react"
import { SITE_NAME, FOOTER_TEXT } from "../constants"
import data from "../data"
import numberFormatter from "../utils/numberFormatter"
import type { TMovieItem } from "../types"
import useMedia from "use-media"
import useModal from "../utils/useModal"
import dynamic from "next/dynamic"
import LazyLoad from "react-lazyload-next"
import {
  HeaderRow,
  InfoRow,
  SearchRow,
  SearchInput,
  InfoTotalLabel,
  List,
  PlaceholderVideo,
  FooterRow,
  H1Title,
  Content,
} from "../components/pageStyles"

const DynamicVideoItem = dynamic(
  () => import("../components/VideoItem/VideoItem"),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
)

export const Home = () => {
  const [activeVideo, setActiveVideo] = useState(null)
  const [activeAdditional, setActiveAdditional] = useState(null)
  const { isShowing, toggle } = useModal()
  const isMobile = useMedia({ maxWidth: 480 })
  const { total, search_term, items } = data

  useEffect(() => {
    console.log(["INIT FETCH"])
  }, [])

  /**
   * ToggleActive video card method
   * @param TMovieItem
   */
  const toggleActive = ({ id }: TMovieItem) => {
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
      setActiveAdditional(id)
    }
  }
  /**
   * Getter Active video check
   * @param TMovieItem
   */
  const getActiveVideoState = ({ id }: TMovieItem) => {
    return activeVideo === id
  }
  /**
   * Getter Active Additional block check
   * @param TMovieItem
   */
  const getActiveAdditional = ({ id }: TMovieItem) => {
    return activeAdditional === id
  }
  /**
   * Handle Search
   * @param e
   */
  const handleSearch = (e) => {
    const {
      target: { value },
    } = e
    // setSearchValue(value)
  }

  return (
    <>
      <HeaderRow>
        <H1Title>{SITE_NAME}</H1Title>
      </HeaderRow>
      <Content>
        <SearchRow>
          <SearchInput
            value={search_term}
            onChange={handleSearch}
            type="text"
            id="searchInput"
          ></SearchInput>
        </SearchRow>
        <InfoRow>
          <InfoTotalLabel>
            {numberFormatter(total)} movies found by {search_term}
          </InfoTotalLabel>
        </InfoRow>
        <List>
          {items.map((item: TMovieItem) => (
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
            </LazyLoad>
          ))}
        </List>
      </Content>
      <FooterRow>{FOOTER_TEXT}</FooterRow>
    </>
  )
}
export default Home
