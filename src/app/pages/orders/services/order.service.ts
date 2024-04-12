import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { OrderModel } from '../models/order-models';
import { environment } from 'src/environments/environment';
import { DataModel } from '../models/data-model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
 

  constructor(private http: HttpClient) { }

  getOrder(){
    return firstValueFrom(this.http.get<OrderModel[]>(`${environment.uriLogistic}/Order/GetOrder`))
  }

  getOrderByDate(from:Date, to:Date){
    return firstValueFrom(this.http.get<OrderModel[]>(`${environment.uriLogistic}GetOrderByDate/${from}/${to}`))
  }
  getSupplier(){
    return firstValueFrom(this.http.get<DataModel[]>(`${environment.uriLogistic}/DataMaster/GetSupplier`))

  }
  getItem(){
    return firstValueFrom(this.http.get<DataModel[]>(`${environment.uriLogistic}/DataMaster/GetItems`))

  }

  async addOrder(orderData:OrderModel){
    return  firstValueFrom(this.http.post<OrderModel[]>(`${environment.uriLogistic}/Order/Add`, orderData));

  }
}
