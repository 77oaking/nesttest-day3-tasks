import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {
    getcategory(){
        return ['mobile','laptop','tablet'];
    }
}
