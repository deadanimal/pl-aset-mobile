import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // URL
  public urlTokenObtain: string = environment.baseUrl + 'api/login/'
  public urlUserInfo: string = environment.baseUrl + 'api/auth/user'

  // User Data
  public user_detail: any = {};

  constructor(
    private http: HttpClient
  ) { }
  
  obtainToken(body: Form): Observable<any> {
    return this.http.post<any>(this.urlTokenObtain, body).pipe(
      tap((res) => {
        Storage.set({ key: 'access_token', value: res.access_token });
      })
    )
  }

  obtainUserInfo(body): Observable<any> {
    return this.http.post<any>(this.urlUserInfo, body).pipe(
      tap((res) => {
      })
    )
  }


}
