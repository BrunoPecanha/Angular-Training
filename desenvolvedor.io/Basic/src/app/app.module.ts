import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { registerLocaleData } from '@angular/common'
import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { rootRouterConfig } from './app.route';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import {LOCALE_ID, DEFAULT_CURRENCY_CODE} from '@angular/core';                     


@NgModule({
  declarations: [                                 
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent
  ],
  imports: [    
    HttpClientModule,
    BrowserModule,
    FormsModule,
    [RouterModule.forRoot(rootRouterConfig, {useHash: false})]
  ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'},
    {
        provide: LOCALE_ID,
        useValue: 'pt'
    }, 
    {
        provide:  DEFAULT_CURRENCY_CODE,
        useValue: 'BRL'
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
