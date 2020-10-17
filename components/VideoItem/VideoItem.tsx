import { useEffect } from 'react';
import firstLCapitalize from '../../utils/firstLCapitalize'
import {VideoItemRoot,VideoImages, VideoInfo,VideoTitle,VideoTags,VideoTagItem,VideoBtnRow,VideoMoreBtn} from './styles'
import type {TVideoItem} from '../../types'

export const VideoItem = ({video}) => {
const  {id,source,added,duration, description,picture,tag,pornstar}:TVideoItem = video; 
  return (
    <VideoItemRoot>
                 <VideoImages >
                    {/* {picture.map(({id,path})=>
                    <img src={path} alt={path}/>
                    )} */}
                    <img src={picture[0].path} alt={picture[0].path}/>
                </VideoImages>
                <VideoInfo>
                    <div>Added: {added}</div>
                    <div>Duration:{duration}</div>
                </VideoInfo>
                <VideoTitle>{description}</VideoTitle>
                <VideoTags>
                    {tag.map((item,idx)=>
                        <VideoTagItem key={idx.toString()}>
                            {firstLCapitalize(item)}
                        </VideoTagItem>
                        )}
                </VideoTags>
                <VideoBtnRow>
                    <VideoMoreBtn>More Info</VideoMoreBtn>
                </VideoBtnRow>
    </VideoItemRoot>
  )
}
export default VideoItem
