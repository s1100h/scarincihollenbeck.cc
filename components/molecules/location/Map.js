import { GoogleMapsEmbed } from '@next/third-parties/google';
import { MapWrapper } from 'styles/LocationCard.style';

const Map = ({
  map, title, anchorIdMap, height, width,
}) => (
  <MapWrapper className="margin-scroll" id={anchorIdMap}>
    <GoogleMapsEmbed
      apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
      width={width}
      height={height}
      mode="place"
      zoom="14"
      q={map || 'Scarinci+Hollenbeck+Clove+Road'}
    />
  </MapWrapper>
);

export default Map;
