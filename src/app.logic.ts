// import {multi} from './ts/multiplication';
import fs from 'fs';
import { yarg } from "./config/plugins/yargs.plugin";
const {b:base, l:limit, s:showValue} = yarg;

// const sendNumber = base;
// const sendLimit = limit;
// const showResult = showValue;
// const saveValue = multi(sendNumber, sendLimit, showResult);
let template: string = `
============================
    Tabla del ${base}
============================
`;

let resultOperation: string = '';

for(let i=1; i<=limit; i++){
    resultOperation = `${base} X ${i} = ${base * i}\n`;
    template = template + resultOperation;
}

if(showValue){
    console.log(template);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, {recursive: true})
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, template);
console.log('File created');

fs.appendFile(`tabla-${base}.txt`, template, (err) =>{
    if(err) throw err;
});

