import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
  cartProducts:any=[];
  public grandTotal !: number;
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.cartProducts=res;
      this.grandTotal=this.cartService.getTotalPrice();
    });
    
  }
  removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCart(){
    this.cartService.removeAllCart();
  }

}
