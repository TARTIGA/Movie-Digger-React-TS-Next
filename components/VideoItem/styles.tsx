import styled from "styled-components"
import Carousel from "react-multi-carousel"

export const ItemRoot = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  background-color: ${(props) => (props.activeAdditional ? "#000" : "none")};
  outline: ${(props) => (props.activeAdditional ? " 1px solid red" : "none")};
  outline-offset: 1px;
  padding: 5px;
  max-width: 320px;
  overflow-y: ${(props) => (props.activeAdditional ? "scroll" : "inherit")};
  &::-webkit-scrollbar {
    width: 4px;
    background-color: #000;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #cacaca;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    outline: none;
    padding: 10px;
  }
`

export const CarouselContainer = styled(Carousel)`
  &:hover {
    outline: 1px solid #9ff7fd;
  }
`

export const ModalWrapper = styled.div`
  padding: 10px;
  width: 280px;
`

export const Images = styled.div`
  display: flex;
  min-width: 240px;
`
export const InfoAdditional = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  height: 100%;
  font-size: 14px;
`
export const AdditionalRow = styled.div`
  margin-bottom: 10px;
`

export const PlayIcon = styled.svg`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  fill: #fff;
  margin-left: 5px;
`

export const AdditionalLabel = styled.span`
  margin-right: 5px;
  font-weight: 700;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 14px;
  font-weight: 400;
  margin-top: 15px;
  height: 340px;
`
export const DescriptionWrapped = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-items: center;
  display: inline-block;
  width: 100%;
`
export const TagList = styled.div`
  display: flex;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`
export const TagItem = styled.div`
  padding: 3px;
  border-radius: 4px;
  max-height: 24px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  margin: 3px;
  background-color: ${(props) => props.typeColor || "#646464"};
`
export const MovieTagItem = styled(TagItem)`
  background: #646464;
`
export const CastItem = styled(TagItem)`
  background: #0959cf;
`
export const BtnRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`
export const MoreBtn = styled.button`
  background: #2c2c2f;
  border-radius: 3px;
  width: 100%;
  height: 42px;
  font-size: 14px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  &:hover {
    background: #525252;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    height: 42px;
  }
`
export const ImgContainer = styled.div`
  display: flex;
  max-width: 320px;
  min-width: 240px;
`
export const AdditionalInfo = styled.div`
  display: flex;
  width: 100%;
  max-width: 320px;
  color: #fff;
  flex-direction: column;
`
