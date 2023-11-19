<<<<<<< HEAD
import { HttpClient, HttpHeaders } from '@angular/common/http';
=======
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
    return this.http.get<WoodType[]>(this.url);
  }

  insert(cs: WoodType) {
    return this.http.post(this.url, cs);
  }
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
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

<<<<<<< HEAD
=======
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
  setList(listaNueva: WoodType[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  listId(id: number) {
    return this.http.get<WoodType>(`${this.url}/${id}`);
    }
  update(c: WoodType) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
=======
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645

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
<<<<<<< HEAD
=======
>>>>>>> 451f5da (Se añadio la vista para furniture order)
>>>>>>> 6efaed6f22721bb8a023f35c9b598550f4e09645
}
