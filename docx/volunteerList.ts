import { Table, TableRow, TableCell, Paragraph, TextRun, PatchType, WidthType } from 'docx';
import fillOutDocx from './fillOutDocx.js';

type UserRow = {
  volunteerFullNameThai: string;
  volunteerPhoneNumber: string;
  numberOfFollowers?: string;
  workPermitStartDateThai: string;
  workPermitExpiryDateThai: string;
  visaIssueDate: string;
};

const generateRows = (users: UserRow[]) => {
  return new Table({
    width: { size: 95, type: 'pct' },
    borders: {
      top: { style: 'single', color: '000000', size: 6 },
      left: { style: 'single', color: '000000', size: 6 },
      right: { style: 'single', color: '000000', size: 6 },
      bottom: { style: 'single', color: '000000', size: 6 },
    },
    layout: 'fixed',
    columnWidths: [5, 20, 8, 6, 18, 8, 8, 14, 13],
    rows: [
      new TableRow({
        tableHeader: true,
        bold: true,
        children: [
          tableCell({
            text: 'ลําดับ',
            width: { size: '5%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'ชื่อ-สกุล/เลขประจำตัว/เบอร์โทร',
            width: { size: '20%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'ตำแหน่ง',
            width: { size: '8%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'จำนวนผู้ติดตาม  (คน)',
            width: { size: '6%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'วันที่ได้รับอนุญาต-สิ้นสุดวันที่',
            width: { size: '18%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'เริ่ม',
            width: { size: '8%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'สิ้นสุด',
            width: { size: '8%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'โครงการที่ได้รับมอบหมาย',
            width: { size: '14%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
          tableCell({
            text: 'สถานที่/พื้นที่ในการทำงานปฏิบัติหน้าที่',
            width: { size: '13%', type: WidthType.PERCENTAGE },
            bold: true,
            size: 28,
          }),
        ],
      }),
      ...users.map(
        (user, i) =>
          new TableRow({
            children: [
              tableCell({
                text: (i + 1).toString(),
                width: { size: '5cm', type: WidthType.AUTO },
              }),
              tableCell({
                text: [user.volunteerFullNameThai, `เบอร์โทร ${user.volunteerPhoneNumber}`],
                alignment: 'left',
                width: { size: '20%', type: WidthType.PERCENTAGE },
              }),
              tableCell({
                text: 'อาสาสมัครได้รับเบี้ยเลี้ยงยังชีพ',
                width: { size: '8%', type: WidthType.PERCENTAGE },
              }),
              tableCell({
                text: user.numberOfFollowers || '-',
                width: { size: '6%', type: WidthType.PERCENTAGE },
              }),
              tableCell({
                text: `${user.workPermitStartDateThai} - ${user.workPermitExpiryDateThai}`,
                width: { size: '18%', type: WidthType.PERCENTAGE },
              }),
              tableCell({
                text: user.visaIssueDate,
                width: { size: '8%', type: WidthType.PERCENTAGE },
              }),
              tableCell({
                text: '31 ธ.ค.70',
                width: { size: '8%', type: WidthType.PERCENTAGE },
              }),
              tableCell({
                text: ['คิวออดิด (Q Audit)', 'คิวให้ (Q Gift)'],
                width: { size: '14%', type: WidthType.PERCENTAGE },
              }),
              tableCell({
                text: ['เชียงใหม่', 'ราชบุรี', 'และพื้นที่อื่นๆ ตามที่ได้รับมอบหมาย'],
                size: 24,
                width: { size: '13%', type: WidthType.PERCENTAGE },
              }),
            ],
          }),
      ),
    ],
  });
};

const rows = generateRows([
  {
    volunteerFullNameThai: 'นายแทมโบระ แฮมมอนด์',
    volunteerPhoneNumber: '086-8121405',
    numberOfFollowers: '1',
    workPermitStartDateThai: '21 เม.ย. 66',
    workPermitExpiryDateThai: '10 พ.ค. 67',
    visaIssueDate: '1 ม.ค.66',
  },
]);

await fillOutDocx('volunteerList', {
  testTarget: {
    patchType: PatchType.DOCUMENT,
    children: [rows],
  },
});

function tableCell(options) {
  const { verticalAlign, alignment, width, text, ...styles } = options;
  const textArray = Array.isArray(text) ? text : text.split('\n');
  const widthVal = typeof width === 'number' ? { size: width, type: 'pct' } : width;
  return new TableCell({
    verticalAlign: verticalAlign || 'center',
    width: widthVal,
    children: textArray.map(
      string =>
        new Paragraph({
          children: [
            new TextRun({
              text: string,
              font: 'TH Sarabun New',
              size: 32,
              ...styles,
            }),
          ],
          alignment: alignment || 'center',
          spacing: { after: 20 },
        }),
    ),
  });
}
