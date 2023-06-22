import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Child from 'src/models/Child';
@Injectable({
  providedIn: 'root'
})
export class ChildService {

  routUrl=`${environment.baseUrl}/child`;
  constructor(public http:HttpClient) { }
  // GetAllChildren(){
  //   return this.get<Child[]>(`${this.routUrl}/GetAllChildren`)
  // }
  getChildByParentId(id:number){
    return this.http.get<Child>(`${this.routUrl}/getChildByParentId/${id}`)
}
addChild(child:Child){
  return this.http.post<Child>(this.routUrl,child);
}

// addChild(child:Child){
//   return this.http.post<Child>(`${this.routUrl}/addChild`,child);
// }
}
