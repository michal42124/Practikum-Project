import { Component, OnInit, OnDestroy } from '@angular/core';
import User from 'src/models/User';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import Child from 'src/models/Child';
import { ChildService } from '../services/child.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(public userService: UserService, public childService: ChildService, public router: Router) { }
  user: User = new User("", "", "", null, null, null)
  id: number = 0;
  isSave:boolean=false;
  toAddChild: boolean = false;
  addChild() {
    this.toAddChild = true;
    this.router.navigate(['/addChild'])
  }
  saveUser(form) {
    this.isSave=true;
    this.userService.addUser(this.user).subscribe(succ => {
      localStorage.setItem("user", JSON.stringify(this.user))
      localStorage.setItem("userModel", JSON.stringify(succ))

      alert("השם התוסף בהצלחה")
      console.log(succ)
      this.id =JSON.parse(localStorage.getItem("userModel")).id;
      localStorage.setItem("parentId",JSON.stringify(this.id));
      console.log(this.id)
    }, (err) => {
      console.log(err)
      alert("התרחשה שגיאה")
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem("user") != null) {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.isSave=true;
    }
    else {
      this.user = new User("", "", "", null, null, null);
    }
  }
  ngOnDestroy() {
    localStorage.setItem("user", JSON.stringify(this.user));
  }
}
