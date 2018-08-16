import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './products/products.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    /* 
      整个 app 设置 routingModule, 
      各个 feature 有自己的 routingModule
      默认页设为 products module 下的 productList
      所以导入 products module 作为默认
      
      不需要再这里导入其它 feature module
      交给 router 出来，使用 leazy load
      需要访问其它 feature 时再 load
    */
    ProductsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
