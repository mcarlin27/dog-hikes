import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AllMembersComponent } from './members/members.component';
import { AdminComponent } from './admin/admin.component';
import { NewMemberComponent } from './new-member/new-member.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'members',
    component: AllMembersComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
   path: 'newMember',
   component: NewMemberComponent
  },
  {
   path: 'admin',
   component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
