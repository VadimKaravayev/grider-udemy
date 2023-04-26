import "./ImageList.css";
import ImageShow from "./ImageShow";

export default function ImageList({ images }) {
  const renderedImages = images.map((image) => (
    <ImageShow key={image.id} image={image} />
  ));
  return <div class="image-list">{renderedImages}</div>;
}
