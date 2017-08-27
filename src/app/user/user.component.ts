import { Component, OnInit, ViewChild, ViewChildren, QueryList,  ChangeDetectionStrategy } from '@angular/core';
import { UserdetailsComponent } from './userdetails/userdetails.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  ownerName: string;
  name: string;
  lable: string;
  toggle = true;
  usersList= [{userId: 1, name:'test', address:'test'},
          {userId: 2, name:'test1', address:'test1'},
          {userId: 3, name:'test2', address:'test2'},
          {userId: 4, name:'test3', address:'test3'}
         ]; 
  @ViewChild(UserdetailsComponent)
  userDetails: QueryList<UserdetailsComponent>;
  
  constructor() { }
  
  ngOnInit() {
    this.ownerName="Alok";
    this.name = "test Name";
    this.lable = "parent";
  }

  ngDoCheck(){
    let data = this.ownerName;
  }
  
 
  updateName(){
    this.name = 'updated Name';
  }
  toggleTable(){
    this.toggle = !this.toggle;
  }

  toggleVisible(isVisible:boolean){
    this.toggle = isVisible;
    alert(isVisible);
  }
  getValue(name:string){
    this.lable = name;
    alert(name);
  }
  changeTitle(){
    this.ownerName = "Hello Universe";
  }
  addUser(){
    let user = {userId: 5, name:'New', address:'new'};
    this.usersList.push(user);
  }

}
