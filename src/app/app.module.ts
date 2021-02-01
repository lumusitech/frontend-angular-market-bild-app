import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './product/components/products-list/products-list.component';
import { BillListComponent } from './bill/components/bill-list/bill-list.component';
import { TypePipe } from './product/pipes/type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    BillListComponent,
    TypePipe,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
