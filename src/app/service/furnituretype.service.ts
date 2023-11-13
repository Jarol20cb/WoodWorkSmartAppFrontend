import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FurnitureType } from '../model/furnituretype';
import { Subject } from 'rxjs';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> 451f5da (Se añadio la vista para furniture order)
import { FormGroup } from '@angular/forms';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class FurnituretypeService {
  private url = `${base_url}/furniturestype`
  private listaCambio = new Subject<FurnitureType[]>()

  constructor(private http: HttpClient) { }

  list() {
<<<<<<< HEAD
    return this.http.get<FurnitureType[]>(this.url);
  }

  insert(cs: FurnitureType) {
    return this.http.post(this.url, cs);
  }
  
=======
    let token = sessionStorage.getItem('token');
    return this.http.get<FurnitureType[]>(this.url, {
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
>>>>>>> 451f5da (Se añadio la vista para furniture order)
  setList(listaNueva: FurnitureType[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD
  listId(id: number) {
    return this.http.get<FurnitureType>(`${this.url}/${id}`);
    }
  update(c: FurnitureType) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
=======

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<FurnitureType>(`${this.url}/${id}`, {
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
>>>>>>> 451f5da (Se añadio la vista para furniture order)
}
