import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addcategories',
  templateUrl: './addcategories.component.html',
  styleUrls: ['./addcategories.component.scss']
})
export class AddcategoriesComponent implements OnInit {

  public category = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
  })
  
  constructor(private categoryService: CategoryService,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.value.title.trim() == '' || this.category.value.title == null) {
      this.toast.error("A valid title must be provided!");
      return;
    }
    this.categoryService.addCategory(this.category.value).subscribe(
      (data) => {
        
        data?this.toast.success("Category Added"):this.toast.error("Server Error!");
      }
    )
  }

}
