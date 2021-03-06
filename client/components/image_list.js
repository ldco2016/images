// Create our image list component
// Import React
import React from "react";
import ImageDetail from "./image_detail";

const IMAGES = [
  { title: "pen", link: "https://dummyimage.com/600x400" },
  { title: "maple tree", link: "https://dummyimage.com/600x400" },
  { title: "mug", link: "https://dummyimage.com/600x400" }
];

// Create our component
const ImageList = () => {
  const RenderedImages = IMAGES.map(image => (
    <ImageDetail key={image.title} image={image} />
  ));
  return <ul className="media-list list-group">{RenderedImages}</ul>;
};

// Export our component
export default ImageList;
