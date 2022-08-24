import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import marker from '../icon-location.svg'
import { Icon } from 'leaflet'
import { useSelector } from "react-redux";

const myIcon = new Icon({
  iconUrl: marker,
  iconSize: [46,56]
 })

const GeoMap = () => {
  const {api} = useSelector(store => store.search)

  const lat = api.location.lat;
  const lng = api.location.lng;

  return (
    <div className="h-[77%] w-[1440px] mx-auto">
      <MapContainer
        className="h-full"
        center={[lat, lng]}
        zoom={18}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={myIcon} >
        </Marker>
      </MapContainer>
    </div>
  );
};

export default GeoMap;
