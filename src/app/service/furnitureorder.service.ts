import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FurnitureOrder } from '../model/furnitureorder';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class FurnitureorderService {
  private url = `${base_url}/furniture_order`
  private listaCambio = new Subject<FurnitureOrder[]>()

  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<FurnitureOrder[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(cl: FurnitureOrder) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, cl, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: FurnitureOrder[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<FurnitureOrder>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(c: FurnitureOrder) {
    let token = sessionStorage.getItem('token');

    return this.http.put(this.url, c, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
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
