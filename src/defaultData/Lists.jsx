const mainInformation = {
  name: "Phillip J Fry",
  email: "fryisback@planetexpress.com",
  address1: "1A Planet Express Building",
  address2: "unit 1I",
  city: "New New York",
  state: "NY",
  zip: "10101",
  phone: "800-311-1077",
};

const eduList = [
  {
    // default education
    id: 0,
    degree: "A.S. Computer Science",
    college: "Salt Lake Community College",
    gpa: "3.96",
    startDate: new Date("2021-08-05"),
    present: false,
    endDate: new Date("2023-12-05"),
  },
  {
    id: 1,
    degree: "B.S. Environmental Science",
    college: "Westminster University",
    gpa: "3.64",
    startDate: new Date("2012-08-05"),
    present: false,
    endDate: new Date("2016-06-05"),
  },
];

const expList = [
  {
    id: 0,
    jobTitle: "Computer Lab Aid",
    employer: "Salt Lake Community College",
    department: "Information Technology",
    startDate: new Date("2023-08-05"),
    present: true,
    endDate: null,
    jobDutiesList: [
      "Provide technical support for students and staff as help-desk technical support.",
      "Utilize ServiceNow to create and maintain help-desk incidents.",
      "Diagnose and maintain hardware and software issues.",
      "Provide technical support for printers, WIFI authentication, and various computer applications. ",
    ],
  },
  {
    id: 2,
    jobTitle: "Learning Assistant for Mathematics",
    employer: "Salt Lake Community College",
    department: "Mathematics Department",
    startDate: new Date("2023-08-05"),
    present: true,
    endDate: null,
    jobDutiesList: [
      "Tutor and mentor students in a math class that I also attend with them.",
      "Provide one-on-one tutoring with students. ",
      "Host group study-sessions during the end of semester.",
      "Coordinates and conducts training sessions once a week.",
    ],
  },
  {
    id: 3,
    jobTitle: "Environmental Health Scientist",
    employer: "Salt Lake County Health Department",
    department: "Environmental Health",
    startDate: new Date("2017-04-14"),
    present: false,
    endDate: new Date("2023-05-17"),
    jobDutiesList: [
      "Conducted around 300 routine health inspections per year for food establishments.",
      "Reviewed plans for new food establishments and conducted onsite inspections for approval. ",
      "Coordinated and conducted foodborne illness investigations. ",
      "Conducted health inspections for temporary mass gatherings.",
      "Provided food safety consultations and education.",
      "Created reports based on local food regulation.",
    ],
  },
];

export { mainInformation, expList, eduList };
