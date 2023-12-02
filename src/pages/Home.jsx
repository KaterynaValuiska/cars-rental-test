import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCars } from "../components/redux/operations";
const Home = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.cars);
  console.log(items.length);
  console.log(items);
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      {isLoading && <div>loader</div>}
      <div>Home page</div>
    </>
  );
};

export default Home;
