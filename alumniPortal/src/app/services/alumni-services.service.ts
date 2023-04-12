import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniServicesService {

  constructor(private _http:HttpClient) { }

  memberUrl:string="http://localhost:1337/api/members";
  memberreqUrl:string="http://localhost:1337/api/memberreqs"

  public fetchMembers():any{
    return this._http.get(this.memberUrl)   
  }

  public addMemberReq(member:any): any{
    return this._http.post(this.memberreqUrl,member);
  }

}
