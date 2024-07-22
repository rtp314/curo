export type DocumentData = {
  // document
  writtenAt: string;
  documentDay: string;
  documentMonth: string;
  documentYear: string;
  documentDate: string;

  // volunteer
  volunteerTitleThai: string;
  volunteerFullNameThai: string;
  volunteerTitle: string;
  volunteerFullName: string;
  surname: string;
  firstName: string;
  middleName: string;
  birthDate: string;
  birthMonth: string;
  birthYear: string;
  placeOfBirth: string;
  addressInThailand: string;
  addressNumber: string;
  addressRoad: string;
  addressSubdistrict: string;
  addressDistrict: string;
  addressProvince: string;
  educationLevel: string;
  educationInstitutionAndCountry: string;
  educationGraduatedYear: string;
  volunteerTel: string;
  volunteerEmail: string;
  volunteerGender: string;
  volunteerHomeCountry: string;
  volunteerNationality: string;
  volunteerRace: string;
  volunteerAge: string;
  volunteerDateOfBirth: string;
  volunteerMaritalStatus: string;
  volunteerNationalityThai: string;
  volunteerAddressThai: string;
  volunteerPhoneNumber: string;

  // passport
  passportNumber: string;
  passportIssuedAt: string;
  passportIssueDay: string;
  passportIssueMonth: string;
  passportIssueDate: string; // full date
  passportIssueYear: string;
  passportExpiryDay: string;
  passportExpiryMonth: string;
  passportExpiryYear: string;
  passportExpiryDate: string; // full date

  //visa
  visaType: string;
  visaIssueDate: string;
  visaIssuedAt: string;
  visaExpiryDate: string;
  visaExpiryDateThai: string;
  arrivedBy: string;
  arrivedFrom: string;
  arrivedPort: string;
  arrivedDate: string;
  arrivedMonth: string;
  arrivedYear: string;
  tm6Number: string;
  extensionDays: string;
  extensionReason: string;
  extensionReason1: string;
  extensionReason2: string;
  extensionReason3: string;

  // foundation
  orgNameThai: string;
  orgNameEnglish: string;
  orgTel: string;
  orgEmail: string;
  orgHeadName: string;
  orgHeadNationality: string;
  orgHeadAge: string;
  orgAddress: string;
  orgRegisterNo: string;
  orgRegisteredBy: string;
  orgRegisteredDate: string;
  orgActivities: string;

  // projects
  projectName: string;
  projectStartDate: string;
  projectPosition: string;
  projectPlaceOfWork: string;
  projectDuration: string;
  projectPositionDescription1: string;
  projectPositionDescription2: string;

  // work permit
  workPermitNumber: string;
  workPermitStartDateThai: string;
  workPermitExpiryDateThai: string;

  // extra
  listOfVolunteers: string;
  volunteerTable: string;
};
