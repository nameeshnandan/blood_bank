import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MyDonor } from 'src/models/myDonor';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl='http://localhost:3000/donors';

  constructor(private http:HttpClient) { }

  getAllDonors():Observable<MyDonor>{
   return this.http.get(this.baseurl)
  }

  viewDonor(donorId:string){
    return this.http.get(`${this.baseurl}/${donorId}`)
  }

  getGenderName(genderId:string){
    return this.http.get('http://localhost:3000/genders/'+genderId)
  }
  getTimeName(timeId:string){
    return this.http.get('http://localhost:3000/times/'+timeId)
  }
  getAllGender(){
    return this.http.get('http://localhost:3000/genders/')
  }
  getAllTime(){
    return this.http.get('http://localhost:3000/times/')
  }
  addDonor(donorBody:any){
    return this.http.post(this.baseurl,donorBody)
  }
  deleteDonor(donorId:any){
    return this.http.delete(`${this.baseurl}/${donorId}`)
  }
  updateDonor(donorId:any,donorBody:any){
    return this.http.put(`${this.baseurl}/${donorId}`,donorBody)
  }
}
