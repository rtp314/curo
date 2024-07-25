const volunteerFields = {
  // volunteer
  volunteerTitle: { type: 'select', required: true, options: ['Mr', 'Mrs', 'Ms'] },
  firstName: { type: 'string', required: true },
  middleName: { type: 'string', required: true },
  surname: { type: 'string', required: true },
  volunteerFullNameThai: { type: 'string', required: false },
  volunteerGender: { type: 'select', required: true, options: ['Male', 'Female'] },
  volunteerMaritalStatus: { type: 'select', required: true, options: ['Married', 'Single'] },
  birthDate: { type: 'date', required: true },
  placeOfBirth: { type: 'string', required: true },
  volunteerHomeCountry: { type: 'string', required: true },
  volunteerNationality: { type: 'string', required: true },
  volunteerNationalityThai: { type: 'string', required: true },

  educationLevel: {
    type: 'select',
    required: true,
    options: ['High School', 'University', 'Graduate', 'Postgraduate', 'Other'],
  },
  educationInstitution: { type: 'string', required: true },
  educationCountry: { type: 'string', required: true },
  educationGraduatedYear: { type: 'year', required: true },

  addressNumber: { type: 'string', required: true },
  addressRoad: { type: 'string', required: true },
  addressSubdistrict: { type: 'string', required: true },
  addressDistrict: { type: 'string', required: true },
  addressProvince: { type: 'string', required: true },
  addressCode: { type: 'string', required: true },
  volunteerAddressThai: { type: 'string', required: true },
  volunteerEmail: { type: 'string', required: true },
  volunteerPhoneNumber: { type: 'string', required: true },

  // passport
  passportNumber: { type: 'string', required: true },
  passportIssuedAt: { type: 'string', required: true },
  passportIssueDate: { type: 'date', required: true },
  passportExpiryDate: { type: 'day', required: true },

  //visa
  haveVisa: { type: 'checkbox', required: true },
  visaType: { type: 'string', required: true },
  visaIssueDate: { type: 'date', required: true },
  visaIssuedAt: { type: 'string', required: true },
  visaExpiryDate: { type: 'date', required: true },
  arrivedBy: { type: 'select', required: true, options: ['Air', 'Sea', 'Land'] },
  arrivedFrom: { type: 'string', required: true },
  arrivedPort: { type: 'string', required: true },
  arrivedDate: { type: 'date', required: true },
  tm6Number: { type: 'string', required: false },

  // work permit
  haveWorkPermit: { type: 'checkbox', required: true },
  workPermitNumber: { type: 'string', required: false },
  workPermitIssueDate: { type: 'date', required: false },
  workPermitExpiryDate: { type: 'day', required: false },

  // other
  haveFollowers: { type: 'checkbox', required: true },
  followers: { type: 'number', required: false },
};

export default volunteerFields;
