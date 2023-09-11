import { NgModule, SecurityContext } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ErrorComponent } from './error/error.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleViewComponent } from './article-view/article-view.component';
import { MarkdownModule } from 'ngx-markdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThemeSwitchComponent } from './theme-switch/theme-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ErrorComponent,
    ArticleCardComponent,
    ArticlesComponent,
    ArticleViewComponent,
    ThemeSwitchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      sanitize: SecurityContext.NONE,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
