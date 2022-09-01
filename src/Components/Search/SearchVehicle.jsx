import { RiSearchLine } from "react-icons/ri";
import { useDestinationCoords } from "../../Context/DestinationCoordsProvider";
import "./Search.css";

const SearchVehicle = () => {
  const { latitude, longitude } = useDestinationCoords();
  return (
    <main className="searchVehicle">
      <section className="main">
        <section>
          <RiSearchLine />
          <input type="text" placeholder="نوع ماشین آلات" />
        </section>
        <button
          className={latitude === 0 && longitude === 0 ? "disable" : "active"}
        >
          ثبت درخواست
        </button>
      </section>
    </main>
  );
};

export default SearchVehicle;
