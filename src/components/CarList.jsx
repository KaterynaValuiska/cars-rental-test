import { useEffect } from "react";
import { fetchCars } from "../components/redux/operations";
import { useDispatch, useSelector } from "react-redux";
import CarItem from "./CarItem";
import { WrapperCars } from "./CarItem.styled";
import { addOrders } from "./redux/slice";

const CarList = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.cars);

  const addToOrder = (item) => {
    dispatch(addOrders(item));
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
    <>
      {isLoading && <div>loader</div>}
      <WrapperCars>
        {items &&
          items.map(
            ({
              make,
              rentalPrice,
              img,
              rentalCompany,
              address,
              model,
              year,
              type,
              functionalities,
              id,
              fuelConsumption,
              engineSize,
              description,
              accessories,
              mileage,
              rentalConditions,
            }) => (
              <CarItem
                key={id}
                make={make}
                rentalPrice={rentalPrice}
                img={img}
                rentalCompany={rentalCompany}
                address={address}
                model={model}
                year={year}
                type={type}
                id={id}
                functionalities={functionalities[0]}
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                description={description}
                functionalitiesArr={functionalities}
                accessories={accessories}
                mileage={mileage}
                onAdd={addToOrder}
                rentalConditions={rentalConditions}
              />
            )
          )}
      </WrapperCars>
    </>
  );
};

export default CarList;
