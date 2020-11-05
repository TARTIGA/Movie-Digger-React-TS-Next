import LazyLoad from "react-lazyload-next"
import type { TImgItemType } from "../../types"
import { LoaderImgItem, ImgSlideItem } from "./styles"

const ImgItem = ({ src, alt }: TImgItemType) => {
  return (
    <LazyLoad height={200} placeholder={<LoaderImgItem />}>
      <ImgSlideItem
        src={"https://source.unsplash.com/random/320x260"}
        alt={alt}
      />
    </LazyLoad>
  )
}
export default ImgItem
ImgItem.defaultProps = {
  src: "",
  alt: "",
}
