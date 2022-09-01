// SourceProvider
import { createContext, useContext, useState, useRef, useMemo } from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

const SourceProvider = createContext();
const SourceProviderDispatcher = createContext();

const center = {
  lat: 29.606895781553582,
  lng: 52.53318846571367,
};
const SourceCoordsProvider = ({ children }) => {
  const [draggable, setDraggable] = useState(true);
  const [position, setPosition] = useState(center);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    []
  );

  return (
    <SourceProvider.Provider value={position}>
      <SourceProviderDispatcher.Provider value={setPosition}>
        <Marker
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}
          icon={sourceIcon}
        />
        {children}
      </SourceProviderDispatcher.Provider>
    </SourceProvider.Provider>
  );
};

export default SourceCoordsProvider;

export const useSourceCoords = () => useContext(SourceProvider);
export const useSourceCoordsDispatcher = () =>
  useContext(SourceProviderDispatcher);

export const sourceIcon = new L.Icon({
  iconUrl: "https://s6.uupload.ir/files/map_pin_icon_green_1_x1sm.png",
  iconRetinaUrl: "https://s6.uupload.ir/files/map_pin_icon_green_1_x1sm.png",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});
