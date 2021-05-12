import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountComponent } from './count/count.component';
import { Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'cart', component: CountComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule
  ],
  declarations: [
    AppComponent,
    ShoppingBasketComponent,
    ShoppingItemComponent,
    CountComponent
  ],
  providers: [],
  bootstrap: [ AppComponent],
})
export class AppModule { }
