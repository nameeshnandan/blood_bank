import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyDonor } from 'src/models/myDonor';

@Component({
  selector: 'app-donor-manager',
  templateUrl: './donor-manager.component.html',
  styleUrls: ['./donor-manager.component.css']
})
export class DonorManagerComponent implements OnInit{
  // heading:string="nameesh"
  allDonor:MyDonor[]=[];

  searchKey:string="";
  // url="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gAAAA&pid=Api&P=0&h=180";
    constructor(private api:ApiService){} 

    ngOnInit(): void {
      this.api.getAllDonors().subscribe((result:any)=>{
        console.log(result);
        this.allDonor=result
      })
    }

    bloodChange(){
      alert("dbcsdvcdvfsdvcduovuo")
    }
    search(event:any){
      console.log(event.target.value);
      this.searchKey=event.target.value
    }
}
