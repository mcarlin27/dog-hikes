import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { AllMembersComponent } from './members/members.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'members/:id',
    component: MemberDetailComponent
  },
  {
     path: 'members',
     component: AllMembersComponent
   },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
