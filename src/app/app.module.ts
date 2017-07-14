import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { HomepageComponent } from './homepage/homepage.component';
import { ReversePipe } from './reverse.pipe';
import { MemberDetailComponent } from './member-detail/member-detail.component';
// import { MembersComponent } from './members/members.component';
// import { MemberDetailComponent } from './member-detail/member-detail.component';
// import { AdminComponent } from './admin/admin.component';
// import { EditMemberComponent } from './edit-member/edit-member.component';
// import { AdminPipe } from './admin.pipe';
// import { NewMemberComponent } from './new-member/new-member.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ReversePipe,
    MemberDetailComponent,
    // MembersComponent,
    // AdminComponent,
    // EditMemberComponent,
    // AdminPipe,
    // NewMemberComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
