import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Resource } from '../models/resource.model';
import { environment } from '../../environments/environment.development';
import { ResourceCreate } from '../models/resource-create.model';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {

  private baseUrl = `${environment.apiUrl}/Resources`;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Resource[]>(this.baseUrl);
  }

  getById(id: number) {
    return this.http.get<Resource>(`${this.baseUrl}/${id}`);
  }

  search(query: string) {
    return this.http.get<Resource[]>(`${this.baseUrl}/search?query=${query}`);
  }

  // create(data: Resource) {
  //   return this.http.post(this.baseUrl, data);
  // }
  create(data: ResourceCreate) {
    return this.http.post(this.baseUrl, data);
  }

  approve(id: number) {
    return this.http.put(`${this.baseUrl}/approve/${id}`, {});
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
