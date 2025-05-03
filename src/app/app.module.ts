//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        StudentProfileComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
