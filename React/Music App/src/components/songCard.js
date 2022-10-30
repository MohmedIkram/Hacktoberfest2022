import React from 'react';
import { AiOutlineEye } from "react-icons/ai";

const SG = ({data}) => {
  return (
    <div className="card" key={data.id}>
      <img src={data.mp3_thumbnail_b} alt="thumb" />
      <div className="tab">
        <p>{data.mp3_duration} min</p>
        <p>
          <AiOutlineEye/>
          &nbsp;
          {data.total_views}
        </p>
      </div>
      <div className="des">
      <h3>{data.mp3_title}</h3>
      <p style={{maxWidth:"15rem"}}>{data.mp3_artist}</p>
      <p>{data.category_name}</p>
      <audio controls>
        <source src={data.url_320} type="audio/mpeg"/>
      </audio>
      </div>
    </div>
  )
}

export default SG;