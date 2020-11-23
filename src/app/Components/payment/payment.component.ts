import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { PaymentService } from '../../Services/payment.service';



@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup
  idPayment: String
  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private router: Router,
    
  ) {
    this.validator()
   }

  ngOnInit(): void {
  }
  validator(){
  
  
    this.paymentForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      date:[''],
      password: ['', [Validators.required, Validators.minLength(6)] ],
      paymentMethod: ['', Validators.required],
      totalPayment:['', Validators.required],
      numberCard: ['', Validators.required],

    })
  }
  savePayment() {
    if (this.paymentForm.valid) {
      this.paymentService.createPayment(this.paymentForm.value).subscribe(

        (paymentCreated) => {
          console.log(paymentCreated)
          alert('El pago ha sido exitoso')
        },
        (error) => {
          console.error('Error=>', error)
        }
      )
    } else {
      alert('Hubo inconvenientes al guardar el pago, verifique la información.')
    }
  }

}




