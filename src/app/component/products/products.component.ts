import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';
interface product{
  name:string;
  image:string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private api:ApiService,private CartService:CartService) { }

  ngOnInit(): void {
    this.api.getProducts()
    .subscribe(res=>{
      this.products=res;
      this.products.forEach((product:any)=>{
        Object.assign(product,{quantity:1,total:product.price});
      })
    })
  }
  public products:any;
  productTypes:product[]=[
    {
      name:"Mac book",
      image:"https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg"
    },
    {
      name:"Iphone 13 pro max",
      image:"https://media.wired.com/photos/6148ef98a680b1f2086efee0/1:1/w_1037,h_1037,c_limit/Gear-Review-Apple_iphone13_hero_us_09142021.jpg"
    },
    {
      name:"Nike air max blue",
      image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/60ac2ce1-fdbf-4586-8dd2-8ca7ee816c8a/air-max-2021-mens-shoes-fnRMh3.png"
    }
  ]
  addToCart(item:any){
    this.CartService.addToCart(item);
  }
}
