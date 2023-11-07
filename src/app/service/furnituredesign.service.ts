import { Injectable } from '@angular/core';
import { FurnitureDesign } from '../model/furnituredesign';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class FurnituredesignService {
  private url = `${base_url}/furniture_design`
  private listaCambio = new Subject<FurnitureDesign[]>()


  constructor(private http: HttpClient) { }

  list() {
    let token = sessionStorage.getItem('token');
    return this.http.get<FurnitureDesign[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(cl: FurnitureDesign) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, cl, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  setList(listaNueva: FurnitureDesign[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<FurnitureDesign>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(c: FurnitureDesign) {
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
