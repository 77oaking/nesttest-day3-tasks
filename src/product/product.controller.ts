import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';
@Controller('product')
export class ProductController {
    constructor(private readonly productservice:ProductService){}
    @Get()
    getProducts(){
        return this.productservice.getAllproducts();
    }
    @Get(':id')
    getProduct(@Param('id') id:string){
        return this.productservice.getproductbyID(Number(id));
    }

    
}
