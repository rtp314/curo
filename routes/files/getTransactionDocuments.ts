const transactionDocuments = {
  workPermitApplication: {
    pdf: ['tm7'],
    docx: ['test'],
  },
  workPermitRenewal: {
    pdf: [],
    docx: [],
  },
  visaApplication: {
    pdf: ['tm7', 'foundationCharter', 'foundationMap', 'foundationOfficePictures', 'foundationTax', 'houseBook'],
    docx: [
      'foundationChart',
      'foundationProject1',
      'foundationProject2',
      'foundationRegistration',
      'listOfProjectsAndVolunteers',
      'projectSchedule',
      'taxCoverLetter',
      'threeVisaExtensionLetters',
      'volunteerList',
    ],
  },
  visaExtension: {
    pdf: [],
    docx: [],
  },
  preWorkPermitApplication: {
    pdf: [],
    docx: [],
  },
  pmjApplication: {
    pdf: [],
    docx: [],
  },
  pmjRenewal: {
    pdf: [],
    docx: [],
  },
  visaCancellation: {
    pdf: [],
    docx: [],
  },
  workPermitCancellation: {
    pdf: [],
    docx: [],
  },
} as const;

export default function getTransactionDocuments(transaction: string) {
  if (!transactionDocuments[transaction]) throw new Error('Invalid transaction');
  return transactionDocuments[transaction];
}
