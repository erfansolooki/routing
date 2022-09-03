import { useContext, useState, createContext } from "react";

const VehiclesListProviderContext = createContext();
const VehiclesListProviderContextDispatcher = createContext();

const VehiclesListProvider = ({ children }) => {
  const [state, setState] = useState("");

  return (
    <VehiclesListProviderContext.Provider value={state}>
      <VehiclesListProviderContextDispatcher.Provider value={setState}>
        {children}
      </VehiclesListProviderContextDispatcher.Provider>
    </VehiclesListProviderContext.Provider>
  );
};

export default VehiclesListProvider;
export const useVehiclesList = () => useContext(VehiclesListProviderContext);
export const useVehiclesListAction = () =>
  useContext(VehiclesListProviderContextDispatcher);
