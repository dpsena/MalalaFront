import { Component, OnInit } from '@angular/core';
import { BillingService } from '../../Services/billing.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  allBillings: any;

  constructor(
    private billingServices: BillingService
  ) {
   }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.billingServices.getAll().subscribe(
      (billings) => {
        this.allBillings = billings
      },
      (error) => {
        console.error('Error -> ', error)
      }
    )
  }

}