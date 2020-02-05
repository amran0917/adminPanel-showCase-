import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.css']
})
export class MobileAppComponent implements OnInit {
  mobile: any;
  public data = [];
  public title: string ;
  public desc: string;
  constructor(private router: Router,  private route: ActivatedRoute, private sidebarservices: SidebarServices, public fb: FormBuilder) {

      this.mobile = this.fb.group({
          title : [''],
          desc: ['']
      });
  }
  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/mobile-app']);
  }

}
