import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/interface/class/Client';
import { FormsModule, NgForm } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [FormsModule, CommonModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();

  clientList: Client[] = [];

  clientService = inject(ClientService);

  router = inject(Router);

  ngOnInit(): void {
    this.loadClient();
  }
  onSaveClient() {
    this.clientService.addEmp(this.clientObj).subscribe((res: any) => {
      if (res) {
        alert("Emp is created");
        this.loadClient();
      } else {
        alert("Emp is not Created")
      }
    })

  }
  loadClient() {
    this.clientService.getAllEmp().subscribe((res: any) => {
      this.clientList = res;
    })
  }

  onDelete(id: number) {
    const isdelete = confirm("Are you sure you want to delete this client");
    if (isdelete) {
      this.clientService.deleteEmp(id).subscribe((res: any) => {
        //if (res) {
          alert("Emp is Delete sucessfull");
          this.loadClient();
        //} else {
        //  alert("Emp is not Not Delete")
        //}
      })

    }
  }

  onedit(client: Client) {
    this.router.navigate(['/update-client', client.id]); // Navigate to update page with client ID
  }
  onReset(form: NgForm) {
    form.resetForm(); // Clears all input values and resets validation states
}
  
}