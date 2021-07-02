import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Instruction } from '../Models/Instruction';

@Injectable({
  providedIn: 'root'
})
export class InstructionsService {
  instructionUrl:string = "https://60d0a26d7de0b20017109358.mockapi.io/api/Instructions";
  constructor(private http:HttpClient) { }

  getInstructions():Observable<Instruction[]>{
    return this.http.get<Instruction[]>(this.instructionUrl);
  }
}
