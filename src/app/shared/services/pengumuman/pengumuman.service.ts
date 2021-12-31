import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Form } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PengumumanService {
  // URL
  public urlPengumuman: string = environment.baseUrl + 'api/pengumuman/'

  constructor(
     private http: HttpClient
  ) { }

  getAll(): Observable<any[]> {
     return this.http.get<any[]>(this.urlPengumuman).pipe(
       tap((res) => {
       })
     )
  }


}
