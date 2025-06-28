import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }
   
  getMessage(input:any){
    alert(`Hello ${input}, this is a message from MyServiceService!`); 
  }


}
