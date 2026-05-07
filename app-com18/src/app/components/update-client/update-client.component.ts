import { Component, inject, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../../model/interface/class/Client';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-update-client',
  imports: [FormsModule,CommonModule],
  templateUrl: './update-client.component.html',
  styleUrl: './update-client.component.css'
})
export class UpdateClientComponent implements OnInit{

  clientObj: Client = new Client();
  clientService = inject(ClientService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.clientService.getEmpById(+id).subscribe((res: any) => {
        this.clientObj = res;
      });
    }
  }

  onUpdateClient() {
    this.clientService.updateEmp(this.clientObj.id,this.clientObj).subscribe(() => {
      alert('Client Updated Successfully');
      this.router.navigate(['/client']); // Navigate back to the client page
    });
  }

}
