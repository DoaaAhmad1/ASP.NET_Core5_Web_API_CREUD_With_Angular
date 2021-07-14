import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { PaymentDetailsModel } from './payment-details-model';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
  formData:PaymentDetailsModel = new PaymentDetailsModel();
  list : PaymentDetailsModel[];
  constructor(private http: HttpClient ) {

   }
   readonly baseURL ='http://localhost:13504/api/PaymentDetails';

   postPaymentDetails()
   {
    return this.http.post(this.baseURL , this.formData)
   }
   putPaymentDetails()
   {
    return this.http.put(`${this.baseURL}/${this.formData.PaymentDetailId}` , this.formData)
   }
   deletePaymentDetail(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

   refreshList()
   {
     this.http.get(this.baseURL)
     .toPromise()
     .then(res =>
      this.list = res as PaymentDetailsModel[])
   }
}
