import { Injectable } from '@angular/core';
import { FurnitureDesign } from '../model/furnituredesign';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> 451f5da (Se añadio la vista para furniture order)

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class FurnituredesignService {
  private url = `${base_url}/furniture_design`
  private listaCambio = new Subject<FurnitureDesign[]>()


  constructor(private http: HttpClient) { }

  list() {
<<<<<<< HEAD
    return this.http.get<FurnitureDesign[]>(this.url);
  }

  insert(cs: FurnitureDesign) {
    return this.http.post(this.url, cs);
=======
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
>>>>>>> 451f5da (Se añadio la vista para furniture order)
  }

  setList(listaNueva: FurnitureDesign[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD
  listId(id: number) {
    return this.http.get<FurnitureDesign>(`${this.url}/${id}`);
    }
  update(c: FurnitureDesign) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
=======

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
>>>>>>> 451f5da (Se añadio la vista para furniture order)
}
