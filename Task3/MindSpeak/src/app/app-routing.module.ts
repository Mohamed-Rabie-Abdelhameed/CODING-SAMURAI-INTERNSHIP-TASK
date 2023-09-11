import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleViewComponent } from './article-view/article-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home',  redirectTo: '', pathMatch: 'full' },
  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleViewComponent },
  { path: '**',  component: ErrorComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
