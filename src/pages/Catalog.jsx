import { useSelector } from "react-redux";
import CarList from "../components/CarList";

const Catalog = () => {
  const { isLoading } = useSelector((state) => state.cars);

  return (
    <>
      <h2>Catalog of cars</h2>
      {isLoading && <div>loader</div>}
      <CarList />
    </>
  );
};

export default Catalog;
