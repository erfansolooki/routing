import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import "./Search.css";
import http from "../../Services/httpServices";
import {
  useVehiclesList,
  useVehiclesListAction,
} from "../../Context/VehiclesListProvider";
import RequestNumberModal from "../Modals/RequestNumberModal/RequestNumberModal";

const SearchVehicle = () => {
  const [modalShow, setModalShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const token = JSON.parse(localStorage.getItem("userToken"));
  const vehicleList = useVehiclesList();
  const vehiclesListAction = useVehiclesListAction();
  const [error, setError] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState("");
  const [requestNumber, setRequestNumber] = useState("");

  const handleSearchInputChanges = (event) => {
    setSearchValue(event.target.value);
  };

  const listOfVehiclesHandle = () => {
    http
      .get("/Request/GetVehicleUsers", {
        params: { SearchTerm: searchValue, UserToken: token },
      })
      .then((response) => {
        vehiclesListAction(response.data.data);
        setError(null);
      })
      .catch((error) => {
        if (error) {
          setError(error.message);
        }
      });
  };

  window.addEventListener("click", () => {
    const destinationPosition = localStorage.getItem(
      "destinationLatitudePosition"
    );
    setDestinationPosition(destinationPosition);
  });

  const SendRequestHandle = () => {
    const sourcePosition = JSON.parse(localStorage.getItem("sourcePosition"));
    const sourceLatitudePosition = JSON.stringify(sourcePosition.lat);
    const destinationPosition = JSON.parse(
      localStorage.getItem("destinationPosition")
    );
    const destinationLatitudePosition = JSON.stringify(
      destinationPosition.latitude
    );
    const vehiclesListId = vehicleList[0].id;

    http
      .post("/Request/SendRequest", {
        userToken: token,
        vehicleUserTypeId: vehiclesListId,
        source: sourceLatitudePosition,
        destination: destinationLatitudePosition,
      })
      .then((response) => {
        const data = response.data.data;
        const requestNumber = data.requestNo;
        setRequestNumber(requestNumber);
      })
      .catch((error) => {
        console.log(error.data.message);
      });
    setModalShow(true);
  };

  return (
    <>
      <RequestNumberModal
        requestNumber={requestNumber}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <main className="searchVehicle">
        <section className="main">
          <section className="pt-1">
            <RiSearchLine className="d-block" onClick={listOfVehiclesHandle} />
            <input
              type="text"
              placeholder="نوع ماشین آلات"
              value={searchValue}
              onChange={handleSearchInputChanges}
            />
            <p className="mb-0">{error}</p>
          </section>
          <button
            className={
              destinationPosition == 0 || destinationPosition == null
                ? "disable"
                : "active"
            }
            disabled={
              destinationPosition == 0 || destinationPosition == null
                ? true
                : false
            }
            onClick={SendRequestHandle}
          >
            {destinationPosition == 0 || destinationPosition == null
              ? "ابتدا مقصد را مشخص کنید"
              : "ثبت درخواست"}
          </button>
        </section>
      </main>
    </>
  );
};

export default SearchVehicle;
