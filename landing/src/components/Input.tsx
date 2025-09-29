import { Field, ErrorMessage } from "formik";

interface InputProps {
  error: boolean;
  type?: string;
  placeholder?: string;
  name: string;
  className: string;
  component?: string;
  restProps?: object;
}

const Input = (props: InputProps) => {
  const {
    error,
    type = "text",
    placeholder = " ",
    name,
    className,
    component = "input",
  } = props;
  return (
    <fieldset>
      <Field
        className={`${className} ${error ? "border-red-500" : ""}`}
        placeholder={placeholder}
        type={type}
        component={component}
        name={name}
      />
      <ErrorMessage component={"p"} name={name} className="text-base font-normal leading-[143%] font-inter text-red-500 mt-1" />
    </fieldset>
  );
};

export default Input;
