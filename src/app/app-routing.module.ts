import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news/news.component';
import { NewsContentComponent } from './pages/news-content/news-content.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';

const routes: Routes = [
    { path: '', component: NewsComponent },
    { path: 'article/:id', component: NewsContentComponent },
    { path: 'about-me', component: AboutMeComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
