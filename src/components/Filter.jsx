import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { filterCar } from "./redux/slice";
import { OptionStyle, FieldStyle, Button, FormStyle } from "./Filter.styled";

const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          make: "",
        }}
        onSubmit={(values) => dispatch(filterCar(values.make))}
      >
        <FormStyle>
          <FieldStyle as="select" name="make">
            {makes.map((make) => (
              <OptionStyle key={make} value={make}>
                {make}
              </OptionStyle>
            ))}
          </FieldStyle>

          <Button type="submit">Submit</Button>
        </FormStyle>
      </Formik>
    </>
  );
};
export default Filter;

const makes = [
  "Enter the text",
  "Buick",
  "Volvo",
  "HUMMER",
  "Subaru",
  "Mitsubishi",
  "Nissan",
  "Lincoln",
  "GMC",
  "Hyundai",
  "MINI",
  "Bentley",
  "Mercedes-Benz",
  "Aston Martin",
  "Pontiac",
  "Lamborghini",
  "Audi",
  "BMW",
  "Chevrolet",
  "Chrysler",
  "Kia",
  "Land",
];
