export default function ImageShow({ image }) {
  return (
    <div>
      <img src={image.url} alt={image.alt} />
    </div>
  );
}
