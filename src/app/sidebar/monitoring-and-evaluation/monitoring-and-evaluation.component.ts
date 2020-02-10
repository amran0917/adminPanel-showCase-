import { SidebarServices } from './../../services/sidebar.services';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-monitoring-and-evaluation',
  templateUrl: './monitoring-and-evaluation.component.html',
  styleUrls: ['./monitoring-and-evaluation.component.css']
})
export class MonitoringAndEvaluationComponent implements OnInit {
  
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
    this.router.navigate(['/M&E']);
  }

}
