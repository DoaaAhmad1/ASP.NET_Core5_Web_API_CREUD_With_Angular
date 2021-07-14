import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentDetailService } from 'src/app/Shared/payment-detail.service';
import { PaymentDetailsModel } from 'src/app/Shared/payment-details-model';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    if(this.service.formData.PaymentDetailId == 0)
      this.insertRecord(form);
    else
     this.updateRecord(form);




  }
insertRecord(form:NgForm)
{
  this.service.postPaymentDetails().subscribe(
    res=>{
      this.resetForm(form);
      this.toastr.success('Submitted Successfully','Payment Detailes Register');
    } ,
    err=>{console.log(err)}
 )
}
updateRecord(form:NgForm)
{
  this.service.putPaymentDetails().subscribe(
    res=>{
      this.resetForm(form);
      this.toastr.info('Updated Successfully','Payment Detailes Register');
    } ,
    err=>{console.log(err)}
 )
}
  resetForm(formm:NgForm)
  {
    formm.form.reset();
    console.log(`formm ${formm}`)
    console.log(`formm.form ${formm.form}`)
    this.service.formData = new PaymentDetailsModel() ;
  }
}
