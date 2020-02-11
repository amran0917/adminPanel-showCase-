import { Router, ActivatedRoute } from '@angular/router';
import { SidebarServices } from './../services/sidebar.services';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-techupdate',
  templateUrl: './techupdate.component.html',
  styleUrls: ['./techupdate.component.css']
})
export class TechupdateComponent implements OnInit {

  constructor(private sidebarservices: SidebarServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/techstack']);
  }
}
