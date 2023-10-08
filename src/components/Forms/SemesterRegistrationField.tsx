import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";
import FormSelectField from "./FormSelectField";
import { useSemesterRegistrationsQuery } from "@/redux/api/semesterRegistrationApi";
import { SelectOptions } from "./FormMultiSelectField";

type SemesterRegistrationFieldProps = {
  name: string;
  label?: string;
  onChange?: (e: any) => void;
};

const SemesterRegistrationField = ({
  name,
  label,
  onChange,
}: SemesterRegistrationFieldProps) => {
  const { data, isLoading } = useSemesterRegistrationsQuery({
    limit: 100,
    page: 1,
  });
  const semesterRegistrations = data?.semesterRegistrations;
  const semesterRegistrationsOptions = semesterRegistrations?.map(
    (semester) => {
      return {
        label:
          semester?.academicSemester?.title +
          "-" +
          semester?.academicSemester?.year,
        value: semester?.id,
      };
    }
  );

  return (
    <FormSelectField
      name={name}
      label={label}
      options={semesterRegistrationsOptions as SelectOptions[]}
      handleChange={(e: any) => (onChange ? onChange(e) : undefined)}
    />
  );
};

export default SemesterRegistrationField;
