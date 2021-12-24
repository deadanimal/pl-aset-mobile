import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Kewpa9Service {
  // URL
  public urlKewpa9: string = environment.baseUrl + 'api/kewpa9/'

  constructor(
     private http: HttpClient
  ) { }

  create(body): Observable<any> {
     return this.http.post<any>(this.urlKewpa9, body).pipe(
       tap((res) => {
       })
     )
  }

  getAll(): Observable<any[]> {
     return this.http.get<any[]>(this.urlKewpa9).pipe(
       tap((res) => {
       })
     )
  }

  getOne(id: string): Observable<any> {
     let urlID = this.urlKewpa9 + id + '/'
     return this.http.get<any>(urlID).pipe(
       tap((res: any) => {
       })
     )
   }



  update(id: string, body): Observable<any> {
     let urlID = this.urlKewpa9 + id + '/'
     return this.http.put<any>(urlID, body).pipe(
       tap((res) => {
       })
     )
  }

  delete(id: string): Observable<any> {
     let urlID = this.urlKewpa9 + id + '/'
     return this.http.delete<any>(urlID).pipe(
       tap((res: any) => {
       })
     )
   }


}
