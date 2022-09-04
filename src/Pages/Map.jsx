import { useState } from "react";
import Logout from "../Components/Logout/Logout";
import DraggableMarkerExample from "../Components/Map";
import DescriptionModal from "../Components/Modals/DescriptionModal/DescriptionModal";
import SearchVehicle from "../Components/Search/SearchVehicle";
import VehiclesList from "../Components/VehiclesList/VehiclesList";

const MapPage = () => {
  const [modalShow, setModalShow] = useState(true);
  return (
    <>
      <DraggableMarkerExample />
      <VehiclesList />
      <SearchVehicle />
      <DescriptionModal show={modalShow} onHide={() => setModalShow(false)} />
      <Logout />
    </>
  );
};

export default MapPage;
