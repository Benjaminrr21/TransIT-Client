import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrls: ['./createorder.component.css']
})
export class CreateorderComponent {
  myForm: FormGroup;
  address:string = ""

  constructor(private router:Router,private fb: FormBuilder, private service:OrderService) {
    this.myForm = this.fb.group({
      ime: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.myForm.valid) {
      console.log(this.myForm.value);
    }
  }

  addOrder(){
    var o:any = {
      timeCreated:new Date(),
      address:this.address,
      status:"ADDED",
      currentAddress:"",
      clientId:sessionStorage.getItem("id")
    } 
    this.service.add(o).subscribe(
      (res) => {
        console.log(res)
        this.router.navigate(["/addpackages/"+res.body.id])

      },
      err => console.log(err)
    )
  }
}
