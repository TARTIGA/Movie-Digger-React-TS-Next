import LazyLoad from "react-lazyload-next"
import type { TImgItemType } from "../../types"
import { LoaderImgItem, ImgSlideItem } from "./styles"

const ImgItem = ({ src, alt }: TImgItemType) => {
  return (
    <LazyLoad height={200} placeholder={<LoaderImgItem />}>
      <ImgSlideItem src={src} alt={alt} />
    </LazyLoad>
  )
}
export default ImgItem
ImgItem.defaultProps = {
  src: "",
  alt: "",
}
