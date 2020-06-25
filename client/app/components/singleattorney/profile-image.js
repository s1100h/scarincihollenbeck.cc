
export default function ProfileImage(props) {
  const { image, name } = props;
  return <img rel="preload" src={image} alt={name} className="img-fluid white-transparent-border" />;
}
