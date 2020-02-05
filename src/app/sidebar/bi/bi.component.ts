import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BIComponent implements OnInit {

  constructor(private router: Router,  private route: ActivatedRoute, private _sidebarservices: SidebarServices) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/bi']);
  }
}
