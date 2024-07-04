export const multi= (base: number, limit: number, showResult: boolean) =>{

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

    if(showResult){
        console.log(template);
    }
    return template;
} 