import { ImLocation } from "react-icons/im";
import { useSourceCoords } from "../Context/SourceCoordsProvider";

const SourceCoordinates = () => {
  const { lat, lng } = useSourceCoords();

  return (
    <section className="sourceCoordinates">
      <ImLocation />
      <span className="sourceText">مبدا :</span>

      <span>{lat} , </span>
      <span>{lng}</span>
    </section>
  );
};

export default SourceCoordinates;
