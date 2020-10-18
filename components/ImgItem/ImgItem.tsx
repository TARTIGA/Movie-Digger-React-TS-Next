import styled, { css } from "styled-components"

const ImgItem = ({ src, alt }: TImgItemType) => {
  return <ImgPornItem src={src} alt={alt} />
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
