export const genderOptions = [
    {
        label: "Male",
        value: "male"
    },
    {
        label: "FeMale",
        value: "female"
    },
    {
        label: "Others",
        value: "other"
    },
]

export const departmentOptions = [
    {
        label: "HR",
        value: "hr manager"
    },
    {
        label: "Finance",
        value: "finance"
    },
    {
        label: "Department Management",
        value: "department management"
    },
]

export const adminRoleOptions = [
    {
        label: "SUPER-ADMIN",
        value: "super_admin"
    },
    {
        label: "ADMIN",
        value: "admin"
    }, 
]

export const bloodGroupOptions = [
    {
        label: "A+",
        value: "A+"
    },
    {
        label: "A-",
        value: "A-"
    },
    {
        label: "B+",
        value: "B+"
    },
    {
        label: "B-",
        value: "B-"
    },
    {
        label: "AB+",
        value: "AB+"
    },
    {
        label: "AB-",
        value: "AB-"
    },
    {
        label: "O+",
        value: "O+"
    },
    {
        label: "O-",
        value: "O-"
    },
];


export const facultyOptions = [
	{
		label: 'Engineering',
		value: 'engineering',
	},
	{
		label: 'Faculty of science and engineering',
		value: 'Faculty of science and engineering',
	},
]
export const acDepartmentOptions = [
	{
		label: 'CSE',
		value: 'cse',
	},
	{
		label: 'Software Engineering',
		value: 'software engineering',
	},
]
export const acSemesterOptions = [
	{
		label: 'Fall 2023',
		value: 'fall23',
	},
	{
		label: 'Autumn 2023',
		value: 'autumn2023',
	},
	{
		label: 'Summer 2023',
		value: 'summer23',
	},
]
 
  export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  export const monthOptions = months.map((month: string) => {
    return {
      label: month,
      value: month,
    };
  });
  
  export const days = [
    "SATURDAY",
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
  ];
  export const daysOptions = days.map((day: string) => {
    return {
      label: day,
      value: day,
    };
  });
  
  export const semesterRegistrationStatus = ["UPCOMING", "ONGOING", "ENDED"];
  