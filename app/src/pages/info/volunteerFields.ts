const volunteerFields = {
  // volunteer
  volunteerTitle: { label: 'Title (Mr, Mrs, Ms)', type: 'select', required: true, options: ['Mr', 'Mrs', 'Ms'] },
  firstName: { label: 'First Name', type: 'text', required: true },
  middleName: { label: 'Middle Name', type: 'text', required: true },
  surname: { label: 'Last Name', type: 'text', required: true },
  volunteerFullNameThai: { label: 'Full Name In Thai', type: 'text', required: false },
  volunteerGender: { label: 'Gender', type: 'select', required: true, options: ['Male', 'Female'] },
  volunteerMaritalStatus: { label: 'Marital Status', type: 'select', required: true, options: ['Married', 'Single'] },
  birthDate: { label: 'Birth Date', type: 'date', required: true },
  placeOfBirth: { label: 'Birth Place (according to passport)', type: 'text', required: true },
  volunteerHomeCountry: { label: 'Home Country', type: 'text', required: true },
  volunteerNationality: { label: 'Nationality', type: 'text', required: true },
  volunteerNationalityThai: { label: 'Nationality In Thai', type: 'text', required: true },

  educationLevel: {
    label: 'Highest Level Of Education',
    type: 'select',
    required: true,
    options: ['High School', 'University', 'Graduate', 'Postgraduate', 'Other'],
  },
  educationInstitution: { label: 'School/University Name', type: 'text', required: true },
  educationCountry: { label: 'School/University Country', type: 'text', required: true },
  educationGraduatedYear: { label: 'Graduated Year', type: 'year', required: true },

  addressNumber: { label: 'Address Number', type: 'text', required: true },
  addressRoad: { label: 'Address Road', type: 'text', required: true },
  addressSubdistrict: { label: 'Address Subdistrict (Tambon)', type: 'text', required: true },
  addressDistrict: { label: 'Address District (Amphoe)', type: 'text', required: true },
  addressProvince: { label: 'Address Province (Jangwat)', type: 'text', required: true },
  addressCode: { label: 'Address Postal Code', type: 'text', required: true },
  volunteerAddressThai: { label: 'Address In Thai', type: 'text', required: true },
  volunteerEmail: { label: 'Email', type: 'text', required: true },
  volunteerPhoneNumber: { label: 'Phone Number', type: 'text', required: true },

  // passport
  passportNumber: { label: 'Passport Number', type: 'text', required: true },
  passportIssuedAt: { label: 'Passport Issued At', type: 'text', required: true },
  passportIssueDate: { label: 'Passport Issue Date', type: 'date', required: true },
  passportExpiryDate: { label: 'Passport Expiry Date', type: 'day', required: true },

  //visa
  haveVisa: { label: 'Do you already hold a Thai Visa?', type: 'checkbox', required: true },
  visaType: { label: 'Visa Type', type: 'text', required: true },
  visaIssueDate: { label: 'Visa Issue Date', type: 'date', required: true },
  visaIssuedAt: { label: 'Visa Issued At', type: 'text', required: true },
  visaExpiryDate: { label: 'Visa Expiry Date', type: 'date', required: true },
  arrivedBy: { label: 'Arrived By', type: 'select', required: true, options: ['Air', 'Sea', 'Land'] },
  arrivedFrom: { label: 'Arrived From (the country you left to come to Thailand)', type: 'text', required: true },
  arrivedPort: { label: 'Arrived Port (eg Suvarnabhumi Airport)', type: 'text', required: true },
  arrivedDate: { label: 'Arrived Date', type: 'date', required: true },
  tm6Number: { label: 'TM6 Arrival Card Number (if you have one)', type: 'text', required: false },

  // work permit
  haveWorkPermit: { label: 'Do you already hold a Thai Work Permit?', type: 'checkbox', required: true },
  workPermitNumber: { label: 'Work Permit Number', type: 'text', required: false },
  workPermitIssueDate: { label: 'Work Permit Issue Date', type: 'date', required: false },
  workPermitExpiryDate: { label: 'Work Permit Expiry Date', type: 'day', required: false },

  // other
  haveFollowers: {
    label: 'Do you have any followers? (Spouse or children who will follow you on this visa)',
    type: 'checkbox',
    required: true,
  },
  followers: { label: 'Number of followers', type: 'number', required: false },
} as const;

export default volunteerFields;
