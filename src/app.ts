import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from './presentation/server-app';

// console.log(yarg);

// Función anonima autoinvocada
(async()=>{
    await main();
    // console.log('Realizado');
})();

async function main(){
    // console.log('Holaaaa')
    const {b:base, l:limit, s:show, n:fileName, d:fileDestination} = yarg;
    ServerApp.run({base, limit, show, fileName, fileDestination});
}