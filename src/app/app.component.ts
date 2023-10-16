import {Component, OnInit} from '@angular/core';
import {SoapService} from "./soap.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-soap';
  products: any;
  countries: any;

  constructor(private soapService: SoapService) {
  }
  ngOnInit() {
    this.soapService.clientState().subscribe(ready =>{
      if(ready){
        this.getAllProducts();
      }
    })
  }

  getAllProducts(){
    console.log('Ready to getting all products');
    this.soapService.getAllProducts().subscribe( products =>{
      this.products = products;
      console.log('Products: ', products);
    } )

  }
  productDelete(product: any){
    this.soapService.deleteProduct(product.Id).subscribe(response => {
        console.log(response);
        this.getAllProducts();
    })
  }

}
