import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { MyDonor } from 'src/models/myDonor';
import { MyGender } from 'src/models/myGender';
import { MyTime } from 'src/models/myTime';

@Component({
  selector: 'app-update-donor',
  templateUrl: './update-donor.component.html',
  styleUrls: ['./update-donor.component.css']
})
export class UpdateDonorComponent implements OnInit{
  donorId:string='';
  Donor:MyDonor={};
  genders:MyGender[]=[] as MyGender[];
  times:MyTime[]=[] as MyTime[];
    constructor(private activatedroute:ActivatedRoute,private api:ApiService,private route:Router){}
  ngOnInit(): void {
      this.activatedroute.params.subscribe((data:any)=>{
        this.donorId=data.Id
        // console.log(this.donorId);
        
        this.api.viewDonor(this.donorId).subscribe((data:any)=>{
          this.Donor=data;

          this.api.getAllGender().subscribe((data:any)=>{
            this.genders=data;
          })

          this.api.getAllTime().subscribe((data:any)=>{
            this.times=data;
          })
        })
      })
    }
    updateDonor(){
        this.api.updateDonor(this.donorId,this.Donor).subscribe((data:any)=>{
            this.route.navigateByUrl('')
        })
    }
}
