import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyDonor } from 'src/models/myDonor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-donor',
  templateUrl: './add-donor.component.html',
  styleUrls: ['./add-donor.component.css']
})
export class AddDonorComponent implements OnInit{

    allGender:any=[]
    allTime:any=[]

    donor:MyDonor={};
    // DonorId:string=""
    // DonorName:string=""
    // DonorAge:string=""
    // DonorWeight:string=""
    // DonorBlood:string=""
    // DonorPhoto:string=""
    // DonorPhone:string=""
    // DonorDistrict:string=""
  constructor(private api:ApiService,private router:Router){}
  ngOnInit(): void {
    this.api.getAllGender().subscribe((data:any)=>{
      console.log(data);
      this.allGender=data;
      this.donor.genderId="Gender"
    })
    this.api.getAllTime().subscribe((data:any)=>{
      console.log(data);
      this.allTime=data;
      this.donor.timeId="Available Time"
    })
  }

  addDonor(){
    this.api.addDonor(this.donor).subscribe((data:any)=>{
      this.router.navigateByUrl("")
    })
  }
}
