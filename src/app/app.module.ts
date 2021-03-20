import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { RegistroComponent } from './registro/registro.component';
import { RegistroService } from './registro/registro.service';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './registro/form.component';
import { FormsModule } from '@angular/forms'

const routes: Routes = [
  {path: '', redirectTo: '/registros', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'registros', component: RegistroComponent},
  {path: 'registros/form', component: FormComponent},
  {path: 'registros/form/:id', component: FormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    RegistroComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
