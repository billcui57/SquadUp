import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  constructor() { }

  inGroup:boolean = false;


 joinGroup(){
    this.inGroup = true;
  }



  ngOnInit(): void {

  }

}
