import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product3 } from 'src/app/models/add-product3.model';

@Component({
  selector: 'app-add-product1',
  templateUrl: './add-product1.component.html',
  styleUrls: ['./add-product1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProduct1Component implements OnInit {
  public product1Form:FormGroup;
  public isSubmit = false;

  public constructor(private _formBuilder: FormBuilder){}


  ngOnInit(): void {
      this.product1Form= this.createFormProduct3({} as Product3);
  }
  
  public createFormProduct3(_:Product3):FormGroup{
    return this._formBuilder.group({
      title: this._formBuilder.control('',[Validators.required]),
      sku: this._formBuilder.control('',[Validators.required]),
      color: this._formBuilder.control('',[Validators.required]),
      size: this._formBuilder.control('',[Validators.required]),
      brand: this._formBuilder.control('',[Validators.required]),
      description:this._formBuilder.control('',[Validators.required]),
      images: this._formBuilder.control('',[Validators.required]),
      price: this._formBuilder.control('',[Validators.required]),
      status:this._formBuilder.control('',[Validators.required]),
      tags: this._formBuilder.control('',[Validators.required]),
      categories: this._formBuilder.control([],[Validators.required])
    })
  }

  public updateCategories(event: Event):void{
    const {checked: isChecked, value} = event.target as HTMLInputElement;
    const currentValue = this.product1Form.get('categories').getRawValue() as string[];
    if(isChecked){
      this.product1Form.get('categories').patchValue([...currentValue,value])
    } else{
      this.product1Form.get('categories').patchValue(currentValue.filter((item)=>item != value ))
    }
  }

  public onSubmit():void{
    console.log( this.product1Form.value);
    this.isSubmit = true;
  }
}
