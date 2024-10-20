import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { RequestBaseService } from './request-base.service';
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase.model';

const API_URL = `${environment.BASE_URL}/api/purchase-history`;
@Injectable({
  providedIn: 'root',
})
export class PurchaseService extends RequestBaseService {
  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
  }

  savePurchase(purchase: Purchase): Observable<any> {
    return this.http.post(API_URL, purchase, { headers: this.getHeaders });
  }

  getAllPurchaseItems(): Observable<any> {
    return this.http.get(API_URL, { headers: this.getHeaders });
  }
}
