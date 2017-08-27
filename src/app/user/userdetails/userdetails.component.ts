import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']  
})
export class UserdetailsComponent implements OnInit , OnChanges{
  @Input() users:any[];
  @Input() toggle:any[];
  @Input() title:string;
  @Output() onHide = new EventEmitter<boolean>();
  @Output() onChange = new EventEmitter<string>();
  isVisible = true;
  constructor() {  }

  ngOnInit() {
   }
   hideClick(){
     this.onHide.emit(true);
     this.isVisible = !this.isVisible;
   }

   changeName(){
     this.onChange.emit("Child");
   }
    ngOnChanges(obj: SimpleChanges){
    console.log(obj);
  }
}
