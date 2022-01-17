import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderController } from './modules/order/controller/order.controller';
import { OrderModule } from './modules/order/order.module';
import { OrderService } from './modules/order/service/order.service';
import { UserController } from './modules/user/controller/user.controller';
import { UserModule } from './modules/user/user.module';
import { UserService } from './modules/user/service/user.service';
import { CustomerController } from './modules/customer/controller/customer.controller';
import { CustomerModule } from './modules/customer/customer.module';
import { CustomerService } from './modules/customer/service/customer.service';
import { CategoryController } from './modules/category/controller/category.controller';
import { CategoryModule } from './modules/category/category.module';
import { CategoryService } from './modules/category/service/category.service';
import { ProductController } from './modules/product/controller/product.controller';
import { ProductModule } from './modules/product/product.module';
import { ProductService } from './modules/product/service/product.service';
import { BrandController } from './modules/brand/controller/brand.controller';
import { BrandModule } from './modules/brand/brand.module';
import { BrandService } from './modules/brand/service/brand.service';

import { ConfigModule } from '@nestjs/config';
import { environments } from './environments'; // 👈

@Module({
  controllers: [
    AppController,
    OrderController,
    UserController,
    CustomerController,
    CategoryController,
    ProductController,
    BrandController,
  ],
  providers: [
    AppService,
    OrderService,
    UserService,
    CustomerService,
    CategoryService,
    ProductService,
    BrandService,
  ],
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env',
      isGlobal: true,
    }),
    OrderModule,
    UserModule,
    CustomerModule,
    CategoryModule,
    ProductModule,
    BrandModule,
  ],
})
export class AppModule {}
