import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './pages/news/news/news.component';
import { NewsContentComponent } from './pages/news-content/news-content.component';

const routes: Routes = [
    { path: '', component: NewsComponent },
    {path: ':id', component: NewsContentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
