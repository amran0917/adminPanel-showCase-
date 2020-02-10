import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BIComponent implements OnInit {

  public var: any;
  obj: any;
  public data = [];
  public title: string ;
  public desc: string;
  public fullImagePath: any;
  constructor(private router: Router,  private route: ActivatedRoute, private sidebarservices: SidebarServices, public fb: FormBuilder) {
    this.var = this.fb.group({
      title : [''],
      desc: ['']
  });
    this.var.fullImagePath  = 'https://www.pexels.com/photo/brown-hummingbird-selective-focus-photography-1133957/';
   }

  ngOnInit() {
    this.sidebarservices.getData().subscribe((response) => this.obj = response);
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.var.get('title').value);
    formData.append('desc', this.var.about.get('desc').value);
    console.log(this.var.value);
    this.sidebarservices.addData(formData).subscribe( (response) => console.log(response));
  }
   onEdit(id: any) {
      this.router.navigate(['/edit', id]);
  }
   onAddItem() {
    this.router.navigate(['/addItem']);
  }
  gotoList() {
    this.router.navigate(['/bi']);
  }
}
