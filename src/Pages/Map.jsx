import DraggableMarkerExample from "../Components/Map";
import SearchVehicle from "../Components/Search/SearchVehicle";
import VehiclesList from "../Components/VehiclesList/VehiclesList";

const MapPage = () => {
  return (
    <>
      <DraggableMarkerExample />
      <VehiclesList />
      <SearchVehicle />
    </>
  );
};

export default MapPage;
