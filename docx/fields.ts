const fieldMap = {
  threeVisaExtensionLetters: [
    'documentDate',
    'volunteerTitleThai', //นางสาว / นาย
    'volunteerFullNameThai',
    'volunteerTitle', //Mr, Mrs, etc
    'volunteerFullName',
    'volunteerAge',
    'passportNumber',
    'workPermitNumber',
    'workPermitStartDateThai',
    'workPermitExpiryDateThai',
    'visaExpiryDateThai',
    'volunteerAddressThai',
  ],

  listOfProjectsAndVolunteers: ['volunteerFirstName', 'volunteerLastName', 'numberOfVolunteers', 'listOfVolunteers'],

  foundationProject1: [
    'listOfVolunteers', // list of all volunteers full names in English as numbered list
  ],

  foundationProject2: [
    'listOfVolunteers', // list of all volunteers full names in English as numbered list
  ],

  projectSchedule: [
    'volunteerTitleThai',
    'volunteerFullNameThai',
    'volunteerNationalityThai',
    'passportNumber',
    'workPermitNumber',
    'workPermitStartDateThai',
    'workPermitExpiryDateThai',
  ],

  taxCoverLetter: ['documentDate'],

  volunteerList: ['volunteerTable'],
  // table with following columns
  // number
  // volunteerFullNameThai
  // "อาสาสมัครได้รับเบี้ยเลี้ยงยังชีพ"
  // numberOfFollowers
  // workPermitDateRange
  // startDate - when did they start with the foundation
  // "31 ธ.ค.70"
  // `คิวออดิด (Q Audit)\nคิวให้ (Q Gift)`
  // `เชียงใหม่\nราชบุรี\nและพื้นที่อื่นๆ ตามที่ได้รับมอบหมาย`

  foundationChart: [],
  foundationRegistration: [],
} as const;

export default fieldMap;
