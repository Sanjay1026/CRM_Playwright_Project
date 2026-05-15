import { test } from "@playwright/test";
import excel, { Workbook } from "exceljs";
import path from "node:path";

test("read single data", async ({ page }) => {
  //create new workbook
  let book = new excel.Workbook();
  await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx")); // path recognized
  // create a sheet to recognize worksheet
  let sheet = await book.getWorksheet("Sheet1"); // sheet recognized
  let data = await sheet.getRow(1).getCell(1).value; // cell recognized
  console.log(data);
});

//? .value is used to get the ACTUAL data stored inside the Excel cell.
//? Example: let data = sheet.getCell("A1").value;

//? .toString() converts ANY datatype into STRING.
//?  Example: let data = sheet.getCell("A1").value.toString();
// Now even if Excel has: 100 -> Output becomes: "100"

test.only("read multiple data",async({page})=>{
  let book=new Workbook();
  await book.xlsx.readFile(path.join(__dirname, "../../testdata/exceldata.xlsx")); // path recognized
  let sheet=book.getWorksheet("Sheet2");
 // use for loop to iterate
 for(let row=1;row<=sheet.actualRowCount;row++){
    for(let c=1;c<=sheet.actualColumnCount;c++){
      let data=sheet.getRow(row).getCell(c).value;
      console.log(data);
    }
  }
})


