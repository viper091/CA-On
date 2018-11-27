import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainRoutesModule } from  './routes/main-routes/main-routes.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component'

import { MaterialModule } from './material/material.module'
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';

import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FlexLayoutModule} from "@angular/flex-layout";

import { EHeaderComponent } from './design/e-header/e-header.component';
import { EHeaderTitleComponent } from './design/e-header/e-header-title/e-header-title.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from  'ngx-ui-loader';
import { CityPipe } from './Tools/city.pipe';
import { InterceptorModule } from './api/interceptor/interceptor.module';
import { LogoutComponent } from './auth/logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAdminComponent } from './dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardApplicatorComponent } from './dashboard/dashboard-applicator/dashboard-applicator.component';
import { DashboardUserComponent } from './dashboard/dashboard-user/dashboard-user.component';
import { MinhaCarterinhaComponent } from './dashboard/dashboard-user/minha-carterinha/minha-carterinha.component';
import { HistoricoComponent } from './dashboard/dashboard-user/historico/historico.component';
import { DadosComponent } from './dashboard/dashboard-user/dados/dados.component';
import { SessionEndComponent } from './auth/session-end/session-end.component';
import { VacinaApplyComponent } from './dashboard/dashboard-applicator/vacina-apply/vacina-apply.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_DATE_LOCALE } from '../../node_modules/@angular/material';
import { SearchComponent } from './dashboard/dashboard-applicator/search/search.component';
import { PostoComponent } from './dashboard/dashboard-applicator/posto/posto.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';

import 'hammerjs';
import { NgxHmCarouselModule } from 'ngx-hm-carousel';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ResetComponent } from './auth/reset/reset.component';
import { MakePostoComponent } from './dashboard/dashboard-admin/make-posto/make-posto.component';
import { MakeAplicadorComponent } from './dashboard/dashboard-admin/make-aplicador/make-aplicador.component';
import { MakeCampanhaComponent } from './dashboard/dashboard-admin/make-campanha/make-campanha.component';
import { MakeVacinaComponent } from './dashboard/dashboard-admin/make-vacina/make-vacina.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { TruncateModule } from '@yellowspot/ng-truncate';

registerLocaleData(localePt);

import {MAT_MOMENT_DATE_FORMATS, MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import { ViewPostosComponent } from './dashboard/dashboard-admin/view-postos/view-postos.component';
import { ViewAplicadoresComponent } from './dashboard/dashboard-admin/view-aplicadores/view-aplicadores.component';
import { ViewVacinasComponent, DialogConfirm } from './dashboard/dashboard-admin/view-vacinas/view-vacinas.component';
import {  NgxUiLoaderConfig, SPINNER, POSITION, PB_DIRECTION } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00d1b2',
  bgsPosition: POSITION.centerCenter,
  bgsSize: 60,
  bgsOpacity:1,
  bgsType: SPINNER.circle,
  pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
  pbThickness: 55, // progress bar thickness
};
@NgModule({
  entryComponents:[ NotificationsComponent ,DialogConfirm],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    
    EHeaderComponent,
    EHeaderTitleComponent,
    PageNotFoundComponent,
    CityPipe,
    LogoutComponent,
    DashboardComponent,
    DashboardAdminComponent,
    DashboardApplicatorComponent,
    DashboardUserComponent,
    MinhaCarterinhaComponent,
    HistoricoComponent,
    DadosComponent,
    SessionEndComponent,
    VacinaApplyComponent,
    SearchComponent,
    PostoComponent,
    HelpComponent,
    AboutUsComponent,
    ResetComponent,
    MakePostoComponent,
    MakeAplicadorComponent,
    MakeCampanhaComponent,
    MakeVacinaComponent,
    NotificationsComponent,
    ViewPostosComponent,
    ViewAplicadoresComponent,
    ViewVacinasComponent,
    DialogConfirm
],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainRoutesModule,
    MaterialModule,
    LoadingBarRouterModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  
    InterceptorModule,
    NgxHmCarouselModule,
    TruncateModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderHttpModule, // import NgxUiLoaderHttpModule. By default, it will show background loader.
    // If you need to show foreground spinner, do as follow:
     NgxUiLoaderHttpModule.forRoot({ showForeground: false })

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' }    ,
    {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'},
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}

  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
