import{test} from "@playwright/test";
import fs from "fs"

let datafile=fs.readFileSync("C:/Users/sanja/OneDrive/Desktop/Playwright/testdata/singledata..json");
let data=JSON.parse(datafile);  // Converting json object to Javascript object


// for single data -> {"greet":"Hello"}
test("read single data ",({page})=>{
    console.log(data.greet);        // Hello
})



// for multiple data -> [{"greet":"Hello"},{"greet":"Byeeee"},{"greet":"hiiiii"}]
// forEach
// array.forEach((value, index, array) => {
    // logic
// });


test.only("read multiple data",({page})=>{
    // as data there in array of object , using forEach loop 

    data.forEach(d => {
        console.log(d.greet); 
    });
})


