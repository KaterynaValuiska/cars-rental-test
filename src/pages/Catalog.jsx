import { useSelector } from "react-redux";
import CarList from "../components/CarList";
import Filter from "../components/Filter";

const Catalog = () => {
  const { isLoading } = useSelector((state) => state.cars);

  return (
    <>
      <h2>Catalog of cars</h2>
      {isLoading && <div>loader</div>}
      <Filter />
      <CarList />
    </>
  );
};

export default Catalog;
