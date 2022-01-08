const Map = ({ map, title }) => (
  <div className="w-100 d-block mb-4">
    <iframe
      rel="preconnect"
      title={`${title} map`}
      src={map}
      className="w-100"
      height={300}
      frameBorder="0"
      allowFullScreen
    />
  </div>
);

export default Map;
