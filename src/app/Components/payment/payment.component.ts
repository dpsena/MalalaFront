import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PaymentService } from '../../Services/payment.service'
import { PaymentMethodsService } from '../../Services/payment-methods.service';
const swal = require('sweetalert')

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm: FormGroup
  allPaymentMethods: any;

  constructor(
    private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private paymentMethodsService: PaymentMethodsService,

  ) {
    
    this.getPaymentMethods()
    
   }

  ngOnInit(): void {
    this.validator()
  }
  validator(){
    this.paymentForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      date:[''],
      status: ['True'],
      paymentMethods: ['', Validators.required],
      totalPayment:['', Validators.required],
      numberCard: ['', [Validators.required, Validators.minLength(16)]],

    })
  }
  paymentSave() {
    if (this.paymentForm.valid) {
      this.paymentService.createPayment(this.paymentForm.value).subscribe(

        (paymentCreated) => {
          console.log(paymentCreated)
          swal('Proceso correcto',  'El pago ha sido exitoso', 'success')
          //alert('El pago ha sido exitoso')
        },
        (error) => {
          console.error('Error=>', error)
        }
      )
    } else {
      swal('Proceso incorrecto',  'Hubo inconvenientes al guardar el pago, verifique la información.', 'error')
      //alert('Hubo inconvenientes al guardar el pago, verifique la información.')
    }
  }

  getPaymentMethods() {
    this.paymentMethodsService.getAll().subscribe(
      (user) => {
        this.allPaymentMethods = user
        console.log(this.allPaymentMethods)
      },
      (error) => {
        console.error('Error-> ', error)

      }
    )
  }
  
  savePaymentMethods(event) {
    console.log(event.target.value)
     this.paymentForm.get('paymentMethods').setValue(event.target.value)
  }
}







