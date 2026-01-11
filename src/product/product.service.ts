import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products=[

        {id:1,prodname:"mobile", price: 10000},
        {id:2,prodname:"laptop", price: 30000},
        {id:3,prodname:"tablet", price: 80000}
    ];
    
    getAllproducts(){
        return this.products;
    }
    getproductbyID(id:number){
        return this.products.find((product) => product.id === id);
    }
}
