import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import "./Search.css";
import http from "../../Services/httpServices";
import { useVehiclesListAction } from "../../Context/VehiclesListProvider";

const SearchVehicle = () => {
  const [searchValue, setSearchValue] = useState("");
  const token = JSON.parse(localStorage.getItem("userToken"));
  const vehiclesListAction = useVehiclesListAction();
  const [error, setError] = useState(null);
  const [destinationPosition, setDestinationPosition] = useState("");
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

  const SendRequestHandle = () => {
    const sourcePosition = localStorage.getItem("sourcePosition");
    console.log(sourcePosition, "search");
  };

  window.addEventListener("click", () => {
    const destinationPosition = localStorage.getItem("destinationPosition");
    setDestinationPosition(destinationPosition);
  });

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
  );
};

export default SearchVehicle;
