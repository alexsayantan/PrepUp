import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {

  categories;

  constructor(private _cat: CategoryService, 
    private _toast: HotToastService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data) => {
        this.categories = data;
      }, (err) => {
        this._toast.error("Error in loading categories!");
       }
    );
  }

}
