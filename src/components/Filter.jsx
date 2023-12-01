import { Field, Form, Formik } from "formik";

const Filter = () => {
  return (
    <Formik
      initialValues={{
        make: "",
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <Field as="select" name="make">
          {makes.map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </Field>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
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
  "Mercedes-Benz",
  "Chrysler",
  "Kia",
  "Land",
];
