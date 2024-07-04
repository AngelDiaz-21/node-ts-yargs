import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) =>  boolean;
}

export interface SaveFileOptions {
    fileContent: string;
    fileDestination?: string;
    fileName?   : string;
}

export class SaveFile implements SaveFileUseCase{
    constructor(
        //**Aqui se deberia tener la inyeccion de dependencias, es decir el repositorio donde se va a grabar la informacion */
        // repository: StorageRepository
    ){}

    execute ({
        fileContent,
        fileDestination = 'outputs', 
        fileName = 'table' 
    }: SaveFileOptions): boolean{
        try {
            fs.mkdirSync(fileDestination, {recursive: true})
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`,  fileContent);
            console.log('File created');    
            return true;
        } catch (error) {
            console.log({error});
            return false;
        }
        // fs.appendFile(`${fileName}.txt`, fileContent, (err) =>{
        //     if(err) throw err;
        // });
    }
}