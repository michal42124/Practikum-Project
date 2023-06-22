import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import Child from 'src/models/Child';
import { ChildService } from '../services/child.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit, OnDestroy {

  constructor(public userService: UserService, public childService: ChildService, public router: Router) { }
  child: Child = new Child("", "", null, "", 0)
  saveChild(form) {
    console.log(localStorage.getItem("parentId"))
    this.child.ParentId = parseInt(localStorage.getItem("parentId"));
    console.log(this.child);
    this.childService.addChild(this.child).subscribe((succ) => {

      localStorage.setItem("child", JSON.stringify(this.child));
      alert("The child has been successfully added")
    }, (err) => {
      localStorage.setItem("child", JSON.stringify(this.child));
      alert("An error occurred child")
    })
    this.child = new Child("", "", null, "", 0)
    this.router.navigate(['/register'])
    // this.child = new Child("", "", null, "", 0)



  }

  ngOnInit(): void {
    if (localStorage.getItem("child") != null) {
      this.child = JSON.parse(localStorage.getItem("child"));
    }
    else {
      this.child = new Child("", "", null, "", 0);
    }
  }
  ngOnDestroy() {
    localStorage.setItem("child", JSON.stringify(this.child));
  }

}
