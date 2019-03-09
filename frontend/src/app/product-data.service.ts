import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  private API_BASE_URL = 'https://ship-shop.herokuapp.com';
  constructor(private http: HttpClient) { }

  getAllContainers() {
    const ENDPOINT_URI = '/getAllContainers';
    return this.http.get<Array<object>>(this.API_BASE_URL + ENDPOINT_URI);
  }
}
