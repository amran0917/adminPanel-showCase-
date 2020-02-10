
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
  }

 onAdd() {
    console.log('added successfully!!!');
    this.router.navigate(['/gis']);
  }

}
