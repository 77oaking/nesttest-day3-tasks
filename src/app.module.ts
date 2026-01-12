import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [CategoryModule, StudentModule],
  controllers: [AppController, UsersController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
