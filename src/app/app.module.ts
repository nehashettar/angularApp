import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { PChildComponent } from './p-child/p-child.component';
import { DircComponent } from './dirc/dirc.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { LoginChildComponent } from './login-child/login-child.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { UserTitlePipe } from './user-title.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    ParentComponent,
    PChildComponent,
    DircComponent,
    HighlightDirective,
    LoginComponent,
    LoginChildComponent,
    AngularPipesComponent,
    UserTitlePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
