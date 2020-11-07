import { ReactChild } from "react"
export type TModalType = {
  isOpen: boolean
  onRequestClose: () => void
  style?: {}
  children: ReactChild
}

export type TMovieItem = {
  id: number
  name: string
  source: string
  description: string
  downloaded: string
  duration: string
  directedBy: string
  producedBy: string
  musicBy: string
  company: string
  country: string
  boxOffice: number
  cast: any[]
  images: any[]
  tags: any[]
  quality: string
}

export type TImgItemType = {
  src: string
  alt: string
}
