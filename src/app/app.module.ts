import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MyUpperCasePipe } from './my-upper-case.pipe';
import { RatingComponent } from './rating/rating.component';
import { MainComponent } from './main/main.component';
import { QuizComponent } from './quiz/quiz.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyUpperCasePipe,
    RatingComponent,
    MainComponent,
    QuizComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
