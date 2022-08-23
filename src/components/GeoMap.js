import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

const GeoMap = () => {
  return (
    <div className="h-[77%] w-[1440px] mx-auto">
      <MapContainer
        className="h-[77%]"
        center={[50.22, 19.15]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </div>
  );
};

export default GeoMap;
