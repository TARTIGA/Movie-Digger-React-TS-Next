import styled from "styled-components"

export const ItemRoot = styled.div`
  display: flex;
  width: 100%;
  max-width: 320px;
  float: left;
  /* height: 320px; */
  color: #fff;
  flex-direction: column;
  background-color: ${(props) => (props.activeAdditional ? "#000" : "none")};
  border: ${(props) => (props.activeAdditional ? " 1px solid red" : "none")};
  box-sizing: content-box;
  padding: ${(props) => (props.activeAdditional ? "5px" : "0")};
  margin-bottom: 20px;
`

export const ItemRootInModal = styled(ItemRoot)`
  border: none;
  padding: 15px;
`

export const Images = styled.div`
  display: flex;
  min-width: 240px;
`
export const InfoAdditional = styled.div`
  display: flex;
  padding: 20px 0;
  flex-direction: column;
  position: absolute;
  height: 100%;
  font-size: 14px;
`
export const AdditionalRow = styled.div`
  margin-bottom: 20px;
`

export const AdditionalLabel = styled.span`
  margin-right: 5px;
  font-style: bold;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
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
  margin-bottom: 15px;
  overflow: hidden;
  @media (max-width: 768px) {
    display: none;
  }
`
export const TagItem = styled.div`
  padding: 3px;
  border-radius: 4px;
  background: #646464;
  max-height: 24px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  margin: 3px;
`
export const MovieTagItem = styled(TagItem)`
  background: #646464;
`
export const CastItem = styled(TagItem)`
  background: #0959cf;
`
export const VideWebcamItem = styled(TagItem)`
  background: #32a567;
`
export const BtnRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
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
