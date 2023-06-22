import { Component, OnInit } from '@angular/core';
import User from 'src/models/User';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit {

  constructor() { }
  user:User=new User("","","",null,null,null)

  ngOnInit(): void {
    this.user=JSON.parse(localStorage.getItem("user"))

  }

}
