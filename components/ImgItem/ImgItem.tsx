import styled, { css } from "styled-components"
import LazyLoad from "react-lazyload-next"
const ImgItem = ({ src, alt }: TImgItemType) => {
  return (
    <LazyLoad height={200} placeholder={<LoaderImgItem />}>
      <ImgPornItem src={src} alt={alt} />
    </LazyLoad>
  )
}
export default ImgItem
export const ImgPornItem = styled.img(
  (props) => css`
    cursor: pointer;
    &:hover {
      outline: 1px solid #a5a5a5;
      outline-offset: -1px;
    }
  `
)
ImgItem.defaultProps = {
  src: "",
  alt: "",
}
type TImgItemType = {
  src: string
  alt: string
}

const LoaderImgItem = styled.div(
  (props) => css`
    width: 100%;
    background-color: #646464;
    min-height: 200px;
  `
)
