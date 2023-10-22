import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/Customer';
import { BehaviorSubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

const base_url = environment.base

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = `${base_url}/customers`
  private listaCambio = new BehaviorSubject<Customer[]>([]);

  constructor(private http:HttpClient) { }

  list(){
    return this.http.get<Customer[]>(this.url);
  }
  insert(cl: Customer){
    return this.http.post(this.url, cl);
  }
  setList(listaNueva: Customer[]){
    this.listaCambio.next(listaNueva);
  }
  getList(){
    return this.listaCambio.asObservable();
  }
}
