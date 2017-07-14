import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { Dog } from '../dog.model';

@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.sass'],
  providers: [MemberService]
})
export class EditMemberComponent implements OnInit {
  @Input() selectedMember;

  dogs: Dog[];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.memberService.getMemberDogs(this.selectedMember.$key).subscribe(data => this.dogs = data);
    }

  beginUpdatingMember(memberToUpdate){
    this.memberService.updateMember(memberToUpdate);
  }

  beginAddingHike(memberWhoHiked, dogWhoHiked, hikeLength){
    this.memberService.addHike(memberWhoHiked, dogWhoHiked, parseFloat(hikeLength));
  }

  beginDeletingMember(memberToDelete){
    if(confirm("Are you sure you want to delete this member?")){
      this.memberService.deleteMember(memberToDelete);
    }
  }
}
