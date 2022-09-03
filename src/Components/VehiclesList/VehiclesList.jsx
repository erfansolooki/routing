import {
  useVehiclesList,
  useVehiclesListAction,
} from "../../Context/VehiclesListProvider";
import { RiCheckFill } from "react-icons/ri";
import "./VehiclesList.css";

const VehiclesList = () => {
  const vehiclesList = useVehiclesList();
  const vehiclesListAction = useVehiclesListAction();

  const selectedVehiclesHandle = (id) => {
    console.log(id);
    const cloneVehiclesList = [...vehiclesList];
    const filterProducts = cloneVehiclesList.filter(
      (product) => product.id === id
    );
    return vehiclesListAction(filterProducts);
  };

  if (!vehiclesList.length) return "";
  return (
    <main className="vehiclesList">
      <section>
        <p className="mb-2">نوع ماشین آلات را انتخاب کنید :</p>
        {vehiclesList.map((item) => (
          <section
            className="text-start mb-2 vehicles"
            key={item.id}
            onClick={() => selectedVehiclesHandle(item.id)}
          >
            <RiCheckFill className="me-2" />
            {item.name}
          </section>
        ))}
      </section>
    </main>
  );
};

export default VehiclesList;
