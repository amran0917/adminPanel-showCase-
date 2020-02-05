import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.css']
})
export class WebAppComponent implements OnInit {

  constructor(private router: Router,  private route: ActivatedRoute, private sidebarservices: SidebarServices) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/web-app']);
  }

}
