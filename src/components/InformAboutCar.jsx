import {
  Button,
  Imeg,
  WrapperName,
  NameCar,
  NameSpan,
  WrapperInfo,
  InfoCar,
  WrapperFunctional,
  TextRental,
  TextRentalVavues,
  WrapperTextRentalVavues,
  Span,
  ButtonClose,
  WrapperMain,
} from "./InformAboutCar.styled";
import x from "./x.svg";

const InformAboutCar = ({
  img,
  make,
  model,
  year,
  fuelConsumption,
  cityCorr,
  country,
  id,
  type,
  engineSize,
  description,
  functionalities,
  accessories,
  rentalPrice,
  mileage,
  onclick,
  rentalConditions,
}) => {
  const array = rentalConditions.split("\n");
  function placeInCenter(num) {
    const strMile = String(num);
    let array = strMile.split("");
    array.splice(1, 0, ",");
    return array.join("");
  }

  return (
    <WrapperMain>
      <ButtonClose onClick={onclick}>
        <img src={x} alt="svg" />
      </ButtonClose>

      <Imeg src={img} alt={make} />
      <WrapperName>
        <NameCar>
          {make}
          <NameSpan>{model}</NameSpan>,{year}
        </NameCar>
      </WrapperName>
      <WrapperInfo>
        <InfoCar>{cityCorr}</InfoCar>
        <InfoCar>{country}</InfoCar>
        <InfoCar>Id:{id}</InfoCar>
        <InfoCar>Year:{year}</InfoCar>
        <InfoCar>Type:{type}</InfoCar>
        <InfoCar>Fuel Consumption:{fuelConsumption}</InfoCar>
        <InfoCar>
          Engine Size:
          {engineSize}
        </InfoCar>
      </WrapperInfo>
      <p>{description}</p>
      <TextRental>Accessories and functionalities:</TextRental>
      <WrapperFunctional>
        {accessories.map((item, index) => (
          <InfoCar key={index}>
            {item.split(" ").splice(0, 3).join(" ")}
          </InfoCar>
        ))}
      </WrapperFunctional>
      <WrapperFunctional>
        {functionalities.map((item, index) => (
          <InfoCar key={index}>
            {item.split(" ").splice(0, 3).join(" ")}
          </InfoCar>
        ))}
      </WrapperFunctional>
      <TextRental>Rental Conditions:</TextRental>
      <WrapperTextRentalVavues>
        <TextRentalVavues>
          Minimum age: <Span>{array[0].split(" ")[2]}</Span>
        </TextRentalVavues>
        <TextRentalVavues>{array[1]}</TextRentalVavues>
        <TextRentalVavues>{array[2]}</TextRentalVavues>
        <TextRentalVavues>
          Mileage: <Span>{placeInCenter(mileage)}</Span>
        </TextRentalVavues>
        <TextRentalVavues>
          Price: <Span>{rentalPrice}</Span>
        </TextRentalVavues>
      </WrapperTextRentalVavues>
      <Button href="tel:+380730000000">Rental car</Button>
    </WrapperMain>
  );
};

export default InformAboutCar;
