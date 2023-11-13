import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Subject } from 'rxjs';
import { CustomerFurniture } from '../model/customerfurniture';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base

=======
import { environment } from 'src/environments/environment';
import { CustomerFurniture } from '../model/customerfurniture';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const base_url = environment.base


>>>>>>> 451f5da (Se añadio la vista para furniture order)
@Injectable({
  providedIn: 'root'
})
export class CustomerfurnitureService {
  private url = `${base_url}/customerFurniture`
  private listaCambio = new Subject<CustomerFurniture[]>()

  constructor(private http: HttpClient) { }

  list() {
<<<<<<< HEAD
    return this.http.get<CustomerFurniture[]>(this.url);
  }

  insert(cfs: CustomerFurniture) {
    return this.http.post(this.url, cfs);
=======
    let token = sessionStorage.getItem('token');
    return this.http.get<CustomerFurniture[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(cl: CustomerFurniture) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, cl, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
>>>>>>> 451f5da (Se añadio la vista para furniture order)
  }

  setList(listaNueva: CustomerFurniture[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD
  listId(id: number) {
    return this.http.get<CustomerFurniture>(`${this.url}/${id}`);
  }
  update(cf: CustomerFurniture) {
    return this.http.put(this.url, cf);
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
=======

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<CustomerFurniture>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(c: CustomerFurniture) {
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
>>>>>>> 451f5da (Se añadio la vista para furniture order)
  }
}
