import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Furniture } from '../model/furniture';
import { Subject } from 'rxjs';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> 451f5da (Se añadio la vista para furniture order)

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class FurnitureService {
  private url = `${base_url}/furnitures`
  private listaCambio = new Subject<Furniture[]>()


  constructor(private http: HttpClient) { }

  list() {
<<<<<<< HEAD
    return this.http.get<Furniture[]>(this.url);
  }

  insert(cs: Furniture) {
    return this.http.post(this.url, cs);
=======
    let token = sessionStorage.getItem('token');
    return this.http.get<Furniture[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(cl: Furniture) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, cl, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
>>>>>>> 451f5da (Se añadio la vista para furniture order)
  }

  setList(listaNueva: Furniture[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD
  listId(id: number) {
    return this.http.get<Furniture>(`${this.url}/${id}`);
    }
  update(c: Furniture) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
=======

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<Furniture>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(c: Furniture) {
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
