import { MapContainer, TileLayer } from "react-leaflet";
import SourceCoordinates from "./SourceCoordinates";
import DestinationCoordinate from "./DestinationCoordinate";
import SourceCoordsProvider from "../Context/SourceCoordsProvider";
import DestinationCoordsProvider from "../Context/DestinationCoordsProvider";
import VehiclesList from "./VehiclesList/VehiclesList";

const center = {
  lat: 29.606895781553582,
  lng: 52.53318846571367,
};

function DraggableMarkerExample() {
  return (
    <MapContainer zoom={13} scrollWheelZoom={false} center={center}>
      <SourceCoordsProvider>
        <DestinationCoordsProvider>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://map.pishgamanasia.ir/tile/{z}/{x}/{y}.png"
          />
          <SourceCoordinates />
          <DestinationCoordinate />
          <VehiclesList />
        </DestinationCoordsProvider>
      </SourceCoordsProvider>
    </MapContainer>
  );
}

export default DraggableMarkerExample;
