import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';
import { Dog } from '../dog.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.sass'],
  providers: [MemberService]
})

export class NewMemberComponent implements OnInit {

  constructor(private router: Router,
    private memberService: MemberService) { }

  ngOnInit() {

  }
  dogArray = [];

  submitForm(name: string, about: string, position: string, dogName: string, dogAge: number, location: string, interests: string) {
    var newDog: Dog = new Dog(dogName, dogAge);
    this.dogArray.push(newDog);
    var newMember: Member = new Member(name, about, position, this.dogArray, location, interests);
    this.memberService.addMember(newMember);
    this.router.navigate(['members']);
  }
}
