import { useEffect } from "react";
import { fetchCars } from "../components/redux/operations";
import { useDispatch, useSelector } from "react-redux";
import CarItem from "./CarItem";
import { WrapperCars } from "./CarItem.styled";

const CarList = () => {
  const { items, isLoading } = useSelector((state) => state.cars);
  console.log("items", items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
  return (
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
            />
          )
        )}
    </WrapperCars>
  );
};

export default CarList;
