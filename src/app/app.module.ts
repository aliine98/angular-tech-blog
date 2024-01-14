import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { NewsModule } from './pages/news/news.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NewsContentComponent } from './pages/news-content/news-content.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CreditsComponent } from './pages/credits/credits.component';

@NgModule({
    declarations: [AppComponent, HeaderComponent, NewsContentComponent, AboutMeComponent, CreditsComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatIconModule,
        BrowserAnimationsModule,
        NewsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
