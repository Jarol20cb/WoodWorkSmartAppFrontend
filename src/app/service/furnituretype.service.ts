import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FurnitureType } from '../model/furnituretype';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
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
    return this.http.get<FurnitureType[]>(this.url);
  }

  insert(cs: FurnitureType) {
    return this.http.post(this.url, cs);
  }
  
  setList(listaNueva: FurnitureType[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<FurnitureType>(`${this.url}/${id}`);
    }
  update(c: FurnitureType) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
