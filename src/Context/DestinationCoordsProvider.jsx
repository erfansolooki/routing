import { createContext, useContext, useState } from "react";
import { Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";

const DestinationProvider = createContext();
const DestinationProviderDispatcher = createContext();

const DestinationCoordsProvider = ({ children }) => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const map = useMapEvents({
    click(event) {
      const { lat, lng } = event.latlng;
      setPosition({
        latitude: lat,
        longitude: lng,
      });
    },
  });

  return (
    <DestinationProvider.Provider value={position}>
      <DestinationProviderDispatcher.Provider value={setPosition}>
        <>
          <Marker
            position={[position.latitude, position.longitude]}
            interactive={false}
            icon={destinationIcon}
          />
        </>
        {children}
      </DestinationProviderDispatcher.Provider>
    </DestinationProvider.Provider>
  );
};

export default DestinationCoordsProvider;

export const useDestinationCoords = () => useContext(DestinationProvider);
export const useSourceDestinationDispatcher = () =>
  useContext(DestinationProviderDispatcher);

export const destinationIcon = new L.Icon({
  iconUrl: "https://s6.uupload.ir/files/map_pin_icon_red_1_g2mu.png",
  iconRetinaUrl: "https://s6.uupload.ir/files/map_pin_icon_red_1_g2mu.png",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});
