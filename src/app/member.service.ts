import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getTopMembers() {
    return this.database.list('/members', {
      query: {
        orderByChild: 'milesHiked',
        limitToFirst: 4,
      }
    });
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  getMemberById(memberId: string){
    return this.database.object('members/' + memberId);
  }

  getDogById(memberId: string, dogId: string){
    return this.database.object('members/' + memberId + '/dogs/' + dogId);
  }

  updateMember(localUpdatedMember){
    var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberEntryInFirebase.update({name: localUpdatedMember.name,
                                about: localUpdatedMember.about,
                                position: localUpdatedMember.position,
                                dogs: localUpdatedMember.dogs,
                                location: localUpdatedMember.location,
                                interests: localUpdatedMember.interests,
                              });
  }

  addHike(localMember, memberDogKey, hikeLength: number) {
    var memberEntryInFirebase = this.getMemberById(localMember.$key);
    var milesHiked = parseFloat(localMember.milesHiked) + hikeLength;
    let dogMilesHikedAmount;
    this.getDogById(localMember.$key, memberDogKey).subscribe(data => {
      dogMilesHikedAmount = data.dogMilesHiked + hikeLength;
    })
    this.getDogById(localMember.$key, memberDogKey).update({dogMilesHiked: dogMilesHikedAmount});
    memberEntryInFirebase.update({milesHiked: milesHiked
                              });

  }


  deleteMember(localMemberToDelete){
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }

  getMemberDogs(memberId: string) {
    return this.database.list(`members/${memberId}/dogs`);
  }

}
