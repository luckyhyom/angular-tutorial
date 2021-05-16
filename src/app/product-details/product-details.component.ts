import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product;

  constructor(private route : ActivatedRoute,
  private cartService : CartService) {  }

  ngOnInit() {
    console.log(products);

    // value : productId
    console.log(this.route.paramMap);
    console.log(this.route.paramMap.subscribe);
    
    // 지금 route컴포넌트에는 productId 라는 파라미터 객체가 있고,
    // 그 파라미터 객체 안에는 html에서 넣어준 index가 값으로 들어있다.
    // 라우트 안에 index전부가 들어있는게 아니다 ! 선언한 파라미터 객체가(값이 담기는 통) 있을 뿐
    // 그 안에 값을 넣어 준 것 뿐이구

    this.route.paramMap.subscribe(params=>{
      // 제품 목록 중에서 하나를 선택하는 과정
      // html에서 index를 넣어줬고, 제품 파일은 배열이므로 ..
      // route 모듈에서 /:productId 로 선언했던 파라미터를 이용함
      this.product=products[+params.get('productId')]
      console.log(params.get('productId'))
      console.log(params)
    })
  }

  addToCart(product){
    this.cartService.addToCart(product);
    alert('added ')
  }

}