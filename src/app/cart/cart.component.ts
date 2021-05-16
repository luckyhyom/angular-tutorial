import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items;

  // 폼 모델을 할당 할 프로퍼티. 폼 데이터가 저장되고 폼의 상태를 표현함
  checkoutForm;



  constructor(private cartService:CartService, private formBuilder : FormBuilder ) {

    this.checkoutForm = this.formBuilder.group({
      name:'',
      address:''
    })

  }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
    
    console.warn('your order has been submitted',customerData);
  }

}

