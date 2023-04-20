const Map = ({ map, title, height = 300 }) => (
  <div className="w-100 d-block mb-4">
    <iframe
      rel="preconnect"
      title={`${title} map`}
      src={map}
      className="w-100"
      height={height}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

export default Map;
