import { Router, ActivatedRoute } from '@angular/router';
import { SidebarServices } from './../services/sidebar.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor(private sidebarservices: SidebarServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

 onAdd() {
    console.log('added successfully!!!');
    this.router.navigate(['/gis']);
  }
}
