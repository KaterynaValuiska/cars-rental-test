import { useState } from "react";
import { Modal } from "./Modal";
import {
  Button,
  Wrapper,
  NameCar,
  NameSpan,
  WrapperName,
  Imeg,
  InfoCar,
  WrapperInfo,
} from "./CarItem.styled";
import InformAboutCar from "./InformAboutCar";
const CarItem = ({
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
  functionalitiesArr,
  accessories,
  mileage,
}) => {
  const [showModal, setShowModal] = useState(false);
  const addressArray = address.split(" ");
  const country = addressArray[addressArray.length - 1];
  const city = addressArray[addressArray.length - 2];
  const cityArray = city.split("");
  cityArray.pop();
  const cityCorr = cityArray.join("");
  const functionalitiesArray = functionalities.split(" ");
  const shotFunctional = functionalitiesArray.splice(0, 3).join(" ");
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <Wrapper>
        <Imeg src={img} alt={make} />
        <WrapperName>
          <NameCar>
            {make}
            <NameSpan>{model}</NameSpan>,{year}
          </NameCar>
          <NameCar>{rentalPrice}</NameCar>
        </WrapperName>
        <WrapperInfo>
          <InfoCar>{cityCorr}</InfoCar>

          <InfoCar>{country}</InfoCar>
          <InfoCar>{rentalCompany}</InfoCar>
          <InfoCar>{type}</InfoCar>
          <InfoCar>{model}</InfoCar>
          <InfoCar>{id}</InfoCar>
          <InfoCar>{shotFunctional}</InfoCar>
        </WrapperInfo>
        <Button onClick={toggleModal}>Learn more</Button>
      </Wrapper>
      {showModal && (
        <Modal onClose={toggleModal}>
          <InformAboutCar
            img={img}
            make={make}
            model={model}
            year={year}
            fuelConsumption={fuelConsumption}
            cityCorr={cityCorr}
            country={country}
            id={id}
            type={type}
            engineSize={engineSize}
            description={description}
            functionalities={functionalitiesArr}
            accessories={accessories}
            rentalPrice={rentalPrice}
            mileage={mileage}
            onclick={toggleModal}
          />
        </Modal>
      )}
    </>
  );
};

export default CarItem;
