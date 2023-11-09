import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { WoodType } from '../model/wood_Type';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class WoodTypeService {
  private url = `${base_url}/wood_type`
  private listaCambio = new Subject<WoodType[]>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<WoodType[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(formData: FormData) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, formData, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    });
  }

  setList(listaNueva: WoodType[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<WoodType>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(id: number, formData: FormData) {
    let token = sessionStorage.getItem('token');
    return this.http.put(`${this.url}/${id}`, formData, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
    });
  }
  
  delete(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
}
