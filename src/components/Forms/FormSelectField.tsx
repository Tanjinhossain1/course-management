"use client";
 
import { Input, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface SelectOptions {
    label: string;
    value: string
    }
interface ISelectFieldProps {
  options: SelectOptions[];
  name: string; 
  size?: "large" | "small";
  value?: string | string[] | undefined;  
  validation?: object;
  label?: string;
  defaultValue?: SelectOptions;
  placeholder?: string;
}

const FormSelectField = ({
  options,
  name, 
  size,
  value,
  validation,
  label,
  defaultValue,
  placeholder
}: ISelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: {value,onChange} }) =>
        <Select  
        value={value}
        size={size}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        style={{width: "100%"}}
      />
        }
      />
    </>
  );
};

export default FormSelectField;