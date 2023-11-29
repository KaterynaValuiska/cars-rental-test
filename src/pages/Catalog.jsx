import { useSelector } from "react-redux";
import CarList from "../components/CarList";

const Catalog = () => {
  const { isLoading } = useSelector((state) => state.cars);

  return (
    <>
      <CarList />
    </>
  );
};

export default Catalog;
