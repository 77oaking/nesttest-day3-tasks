import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { CategoryModule } from './category/category.module';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseService } from './database/database.service';
import { DatabaseController } from './database/database.controller';
import { ConfigModule } from '@nestjs/config';
import { EvService } from './ev/ev.service';
import { EvController } from './ev/ev.controller';

@Module({
  imports: [CategoryModule, StudentModule, CustomerModule, ConfigModule.forRoot({
    isGlobal:true,
  })],
  controllers: [AppController, UsersController, ProductController, MynameController, DatabaseController, EvController],
  providers: [AppService, ProductService, DatabaseService, EvService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');//middleware ta kothay apply hobe. In this case amdr middleware er name hocche Loggermiddleware jeta '*'(all routes) e apply hobe.
  }
}
