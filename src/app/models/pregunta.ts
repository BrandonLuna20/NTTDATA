import { Respuestas } from './respuestas';


export class Pregunta{
    descripcion: string = "";
    listRespuestas: Respuestas[];
    hide?: boolean;

    constructor(descripcion: string, respuestas: Respuestas[]){
        this.descripcion = descripcion;
        this.listRespuestas = respuestas;
    }
}