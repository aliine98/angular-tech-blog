import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news/news.component';
import { NewsContentComponent } from './pages/news-content/news-content.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CreditsComponent } from './pages/credits/credits.component';
import { SearchedArticlesComponent } from './pages/searched-articles/searched-articles.component';

const routes: Routes = [
    { path: '', component: NewsComponent, pathMatch: 'full' },
    { path: 'article/:id', component: NewsContentComponent },
    { path: 'about-me', component: AboutMeComponent },
    { path: 'credits', component: CreditsComponent },
    { path: 'search', component: SearchedArticlesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
