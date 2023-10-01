"use client";

import { DatePicker, DatePickerProps, Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, {Dayjs} from 'dayjs';

interface DatePickerPropsType {
onChangeFunc?: (valOne: Dayjs | null ,valTwo: string) => void;
  name: string;
  label?: string;
  value?: string; 
  size?: "large" | "small"
}

const FormDatePicker = ({ 
onChangeFunc,
  name, 
  label,
  value, 
  size,
}: DatePickerPropsType) => {
  const { control,setValue } = useFormContext();

  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    onChangeFunc ? onChangeFunc(date,dateString) : null;
    setValue(name,dateString)
  };

  return (
    <>
      {label ? label : null}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
        <DatePicker style={{width: "100%"}} size={size} value={dayjs(field.value)|| ""} onChange={onChange} />

        }
      />
    </>
  );
};

export default FormDatePicker;