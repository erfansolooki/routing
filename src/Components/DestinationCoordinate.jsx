import { ImLocation } from "react-icons/im";
import { useDestinationCoords } from "../Context/DestinationCoordsProvider";

const DestinationCoordinate = () => {
  const { latitude, longitude } = useDestinationCoords();
  return (
    <section className="destinationCoordinates">
      <ImLocation />
      <span className="sourceText">مقصد :</span>
      <span>{latitude} ,</span>
      <span>{longitude}</span>
    </section>
  );
};

export default DestinationCoordinate;
