import { RiSearchLine } from "react-icons/ri";
import { useDestinationCoords } from "../../Context/DestinationCoordsProvider";
import { useState } from "react";
import "./Search.css";
import http from "../../Services/httpServices";
import { useVehiclesListAction } from "../../Context/VehiclesListProvider";

const SearchVehicle = () => {
  const { latitude, longitude } = useDestinationCoords();
  const [searchValue, setSearchValue] = useState("");
  const token = JSON.parse(localStorage.getItem("userToken"));
  const vehiclesListAction = useVehiclesListAction();
  const [error, setError] = useState(null);

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

  return (
    <main className="searchVehicle">
      <section className="main">
        <section>
          <RiSearchLine className="d-block" onClick={listOfVehiclesHandle} />
          <input
            type="text"
            placeholder="نوع ماشین آلات"
            value={searchValue}
            onChange={handleSearchInputChanges}
          />
          <p>{error}</p>
        </section>
        <button
          className={latitude === 0 && longitude === 0 ? "disable" : "active"}
          disabled={latitude === 0 && longitude === 0 ? true : false}
        >
          ثبت درخواست
        </button>
      </section>
    </main>
  );
};

export default SearchVehicle;
