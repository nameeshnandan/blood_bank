import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-view-donor',
  templateUrl: './view-donor.component.html',
  styleUrls: ['./view-donor.component.css']
})
export class ViewDonorComponent implements OnInit{
  donorId:string="";
  
  donor:any=[];

  genderId:string="";
  timeId:string="";

  genderName:string="";
  timeName:string="";
    constructor(private activatedroute:ActivatedRoute,private api:ApiService,private route:Router){}
    ngOnInit():void{
      this.activatedroute.params.subscribe((data:any)=>{
        console.log(data);
        this.donorId=data.Id;
        console.log(this.donorId);
        

        this.api.viewDonor(this.donorId).subscribe((data:any)=>{
          console.log(data);
          this.donor=data;
          this.genderId=data.genderId
          console.log(this.genderId);
          this.timeId=data.timeId
          console.log(this.timeId);
          
          
          
          this.api.getGenderName(this.genderId).subscribe((data:any)=>{
            
            console.log(data);
            this.genderName=data.name
            console.log(this.genderName);
            
          })
          
          this.api.getTimeName(this.timeId).subscribe((data:any)=>{
            
            console.log(data);
            this.timeName=data.name
            console.log(this.timeName);
            
          })
        })
          
        
      })
    }
    deleteDonorDetails(donorId:any){
        this.api.deleteDonor(donorId).subscribe((result:any)=>{
          // console.log(result);
          
          alert("Donor Deleted")
          this.route.navigateByUrl('')
        })
    }
  // update(donorid:any){
  //   this.route.navigateByUrl("update/"+donorid)
  // }
}
