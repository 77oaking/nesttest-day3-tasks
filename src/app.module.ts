import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [CategoryModule, StudentModule, CustomerModule],
  controllers: [AppController, UsersController, ProductController, MynameController],
  providers: [AppService, ProductService],
})
export class AppModule {}
