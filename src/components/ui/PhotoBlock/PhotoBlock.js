import React, { useState, useEffect } from "react";

import "./photoBlock.scss";

const PhotoBlock = (props) => {
  const [imageState, setImageState] = useState({ image: [] });
  
  useEffect(() => {
    props.photos.forEach((i) => {
      import(`../../../images/${i}.jpg`).then((image) => {
        setImageState((prevState, props) => ({
          image: [image.default, ...prevState.image],
        }));
      });
    });
  }, []);

  const photoNames = Object.values(imageState.image);
  
  let efg = photoNames.map((i) => (
    <img src={i} alt="" className="photo-block__photo" key={i} />
  ));

  return <div className="photo-block">{efg}</div>;
};

export default PhotoBlock;
