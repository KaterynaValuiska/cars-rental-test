import { nanoid } from "nanoid";
import { useSelector } from "react-redux";
import CarItem from "../components/CarItem";

import { WrapperCars } from "../components/CarItem.styled";
import { useEffect } from "react";

const Favorites = () => {
  const { orders } = useSelector((state) => state.cars);
  let favoritesCar = orders.flat();
  console.log(favoritesCar);

  const carsStringify = JSON.stringify(favoritesCar);
  localStorage.setItem("select-car", carsStringify);

  const carsLocal = JSON.parse(localStorage.getItem("select-car"));
  console.log("selectCarsLocal", carsLocal);

  const favoritesCarAll = [...carsLocal];

  const activeHeart = () => {};
  return (
    <>
      <h2>Selected cars</h2>
      <WrapperCars>
        {favoritesCarAll.length > 0 &&
          favoritesCarAll.map(
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
              functionalitiesArr,
            }) => (
              <CarItem
                key={nanoid()}
                make={make}
                rentalPrice={rentalPrice}
                img={img}
                rentalCompany={rentalCompany}
                address={address}
                model={model}
                year={year}
                type={type}
                id={id}
                functionalities={functionalities}
                fuelConsumption={fuelConsumption}
                engineSize={engineSize}
                description={description}
                functionalitiesArr={functionalitiesArr}
                accessories={accessories}
                mileage={mileage}
                onAdd={activeHeart}
                rentalConditions={rentalConditions}
              />
            )
          )}
      </WrapperCars>
    </>
  );
};

export default Favorites;
