//app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { FormsModule } from '@angular/forms';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { NewAppComponent } from './new-app/new-app.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TextColorDirective } from './text-color.directive';
import { MessageSenderComponent } from './components/message-sender/message-sender.component';
import { MessageListComponent } from './components/message-list/message-list.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ContentComponent,
        FooterComponent,
        StudentProfileComponent,
        ClassBindingComponent,
        NewAppComponent,
        ProfileCardComponent,
        UserProfileComponent,
        TextColorDirective,
        MessageSenderComponent,
        MessageListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
