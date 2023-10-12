const Map = ({ map, title, height = 300 }) => (
  <div className="w-100 d-block mb-4">
    <iframe
      rel="preconnect"
      title={`${title} map`}
      src={map}
      className="w-100"
      height={height}
      allowFullScreen
      style={{ border: 0 }}
    />
  </div>
);

export default Map;
