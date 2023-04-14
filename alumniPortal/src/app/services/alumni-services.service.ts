import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumniServicesService {

public token:any|undefined;
public uid:number=0;

  constructor(private _http:HttpClient) { }

  userUrl:string="http://localhost:1337/api/users";
  memberreqUrl:string="http://localhost:1337/api/memberreqs";
  authUrl:string="http://localhost:1337/api/auth/local";
  publishUrl:string="http://localhost:1337/api/publishes";
  commentsUrl:string="http://localhost:1337/api/comments";

  public fetchAlumnis():any{
    return this._http.get(this.userUrl)   
  }

  public fetchAlumni(id:any):any{
    console.log("service called")
    return this._http.get(this.userUrl+'/'+id)   
  }


  public addMemberReq(member:any): any{
    return this._http.post(this.memberreqUrl,member);
  }

  public fetchReqs():any{
    return this._http.get(this.memberreqUrl)   
  }

  public deletereq( id:number):any{
    return this._http.delete(this.memberreqUrl+'/'+id) ;  
  }

  public register(user:any): any{
    return this._http.post(this.authUrl+'/register',user);
  }

  public authenticate(credentials:any): any{
    return this._http.post(this.authUrl,credentials);
  }

  public postNews(news:any): any{
    return this._http.post(this.publishUrl,news);
  }

  public getNews():any{
    return this._http.get(this.publishUrl)  ; 
  }

  public editUser(data:any, id:number):any{
    return this._http.put(this.userUrl+'/'+id,data) ;  
  }

  public deleteUser( id:number):any{
    return this._http.delete(this.userUrl+'/'+id) ;  
  }

  public postFeedback(comment:any): any{
    return this._http.post(this.commentsUrl,comment);
  }

  public getFeedback():any{
    return this._http.get(this.commentsUrl)  ; 
  }


}
