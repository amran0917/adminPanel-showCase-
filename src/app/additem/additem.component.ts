
import { SidebarServices } from './../services/sidebar.services';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {

  constructor(private sidebarservices: SidebarServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
   // localStorage.getItem('index');
  }

 onAdd() {
    console.log('added successfully!!!');
    if ( localStorage.getItem('index') === '/gis') {
        this.router.navigate(['/gis']);
    } else if (localStorage.getItem('index') === '/bi') {
      this.router.navigate(['/bi']);
   } else if (localStorage.getItem('index') === '/consultancy') {
    this.router.navigate(['/consultancy']);
    }  else if (localStorage.getItem('index') === '/mobile-app') {
      this.router.navigate(['/mobile-app']);
   } else if (localStorage.getItem('index') === '/m&e') {
    this.router.navigate(['/m&e']);
 }  else if (localStorage.getItem('index') === '/web-app') {
  this.router.navigate(['/web-app']);
}


}

}
