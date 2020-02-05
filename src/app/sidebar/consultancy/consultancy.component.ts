import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';

@Component({
  selector: 'app-consultancy',
  templateUrl: './consultancy.component.html',
  styleUrls: ['./consultancy.component.css']
})
export class ConsultancyComponent implements OnInit {

  constructor(private router: Router,  private route: ActivatedRoute, private _sidebarservices: SidebarServices) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/consultancyi']);
  }

}
