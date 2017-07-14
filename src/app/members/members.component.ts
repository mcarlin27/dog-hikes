import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass'],
  providers: [MemberService]
})

export class AllMembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private memberService: MemberService){}

  ngOnInit(){
    this.members = this.memberService.getMembers();
  }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

  filterByPosition: string = "allMembers";

  onChange(optionFromMenu) {
    this.filterByPosition = optionFromMenu;
  }

}
