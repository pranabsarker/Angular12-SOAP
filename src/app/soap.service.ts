import { Injectable } from '@angular/core';
import {Client, NgxSoapService} from 'ngx-soap';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SoapService {

    // @ts-ignore
    client: Client;

    private  clientReady =  new BehaviorSubject(false);

    constructor(private soap: NgxSoapService) {

        this.soap.createClient('./assets/ProductManagement.xml')
            .then(client => {
                console.log('client: ', client);
                this.client = client;
                this.clientReady.next(true);
            })
    }

    clientState(){
        return this.clientReady.asObservable();
    }

    getAllProducts(){
        return this.client.call('GetProducts',{}).pipe(
            map(data => {
                return data.result.GetProductsResult.Product;
            })
        )
    }

    deleteProduct(productId: number){
      const params = {
        id: productId
      }
      return this.client.call('DeleteProduct',params).pipe(
        map(data => {
          return data.result.DeleteProductResult;
        })
      )
    }

}
