import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/interface/role';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  imports: [FormsModule,CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationsList:IDesignation[]=[]
  isLoader:boolean=true;
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((result:any)=>
    {
      this.designationsList=result;
      this.isLoader=false;
    },error=>{
      alert("API error/Network error");
      this.isLoader=false;
    })
  }

  masterService = inject(MasterService);

}
