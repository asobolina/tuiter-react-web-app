import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemovingDataToFromArrays from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JsonStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";

function WorkingWithArrays() {
    console.log("Working with Arrays");
    var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];

    console.log("functionScoped:", functionScoped);
    console.log("blockScoped:", blockScoped);
    console.log("constant1:", constant1);
    console.log("numberArray1:", numberArray1);
    console.log("stringArray1:", stringArray1);
    console.log("variableArray1:", variableArray1);


    return(
        <div>
        <h1>Working with Arrays</h1>
        numberArray1 = { numberArray1 }<br/>
        stringArray1 = { stringArray1 }<br/>
        variableArray1 = { variableArray1 }<br/>
        <h2>Array index and length</h2>
        <ArrayIndexAndLength/>
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <JsonStringify/>
        <FindFunction/>
        <FindIndex/>
        <FilterFunction/>
        </div>
    );
}

export default WorkingWithArrays; 