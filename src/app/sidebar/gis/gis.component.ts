import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-gis',
  templateUrl: './gis.component.html',
  styleUrls: ['./gis.component.css']
})
export class GISComponent implements OnInit {

  gis: any;
  public data = [];
  public title: string ;
  public desc: string;
  constructor(private router: Router,  private route: ActivatedRoute, private _sidebarservices: SidebarServices, public fb: FormBuilder) {
    this.gis = this.fb.group({
      title : [''],
      desc: ['']
  });
   }

  ngOnInit() {
    
  }

  gotoList() {
    this.router.navigate(['/gis']);
  }
}
