import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint(): string {
    return 'Mi primer metodo';
  }
  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('skip') skip = 0,
    @Query('brand') brand: string,
  ) {
    return `Productos: el limite es: ${limit} y el salto es: ${skip}. La marca buscada es: ${brand}`;
  }

  @Get('products/filter')
  getFilter() {
    return `Entre al filtro`;
  }

  @Get('products/:id')
  getProduct(@Param('id') id: string) {
    return `Producto: ${id}`;
  }

  @Get('categories/:id/products/:productId')
  getCategory(@Param('id') id: string, @Param('productId') productId: string) {
    return `Producto: ${productId} de la Categoria ${id}`;
  }
}
