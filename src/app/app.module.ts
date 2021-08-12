import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { ChampzoneComponent } from './pages/champzone/champzone.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { TokensComponent } from './pages/tokens/tokens.component';
import { ToppairsComponent } from './pages/toppairs/toppairs.component';
import { AccountsComponent } from './pages/accounts/accounts.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, OverviewComponent, TokensComponent, ToppairsComponent, AccountsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
