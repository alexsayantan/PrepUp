import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories = [
    {
      "title": "Category",
      "description": "Category description",
    }

  ]

  constructor(
    private _category: CategoryService,
    private toast: HotToastService) { }

  ngOnInit(): void {
    this._category.categories().subscribe((data:any)=>{
      this.categories = data;
    }, (err)=>{
      this.toast.error("Server Error!",err.message);
    });
  }


}
