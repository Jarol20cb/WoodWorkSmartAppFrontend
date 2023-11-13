import { Injectable } from '@angular/core';
import { PaymentType } from '../model/payment';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
import { HttpClient, HttpHeaders } from '@angular/common/http';
>>>>>>> 451f5da (Se añadio la vista para furniture order)
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class PaymenttypeService {
<<<<<<< HEAD
  private url = `${base_url}/payments`
=======
  private url = `${base_url}/payment_type`
>>>>>>> 451f5da (Se añadio la vista para furniture order)
  private listaCambio = new Subject<PaymentType[]>()

  constructor(private http: HttpClient) { }

  list() {
<<<<<<< HEAD
    return this.http.get<PaymentType[]>(this.url);
  }

  insert(cs: PaymentType) {
    return this.http.post(this.url, cs);
  }
=======
    let token = sessionStorage.getItem('token');
    return this.http.get<PaymentType[]>(this.url, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

  insert(cl: PaymentType) {
    let token = sessionStorage.getItem('token');
    return this.http.post(this.url, cl, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }

>>>>>>> 451f5da (Se añadio la vista para furniture order)
  setList(listaNueva: PaymentType[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
<<<<<<< HEAD
  listId(id: number) {
    return this.http.get<PaymentType>(`${this.url}/${id}`);
    }
  update(c: PaymentType) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
=======

  listId(id: number) {
    let token = sessionStorage.getItem('token');
    return this.http.get<PaymentType>(`${this.url}/${id}`, {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${token}`)
        .set('Content-Type', 'application/json'),
    });
  }
  update(c: PaymentType) {
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
