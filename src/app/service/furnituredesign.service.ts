import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FurnitureDesign } from '../model/furnituredesign';
import { WoodType } from '../model/wood_Type';
import { Customer } from '../model/customer';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class FurnitureDesignService {
  private url = `${base_url}/furnituredesigns`
  private listaCambio = new Subject<FurnitureDesign[]>()


  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<FurnitureDesign[]>(this.url);
  }

  insert(cs: FurnitureDesign) {
    return this.http.post(this.url, cs);
  }
  
  setList(listaNueva: FurnitureDesign[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<FurnitureDesign>(`${this.url}/${id}`);
    }
  update(c: FurnitureDesign) {
    return this.http.put(this.url, c);
    }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
    }
}
