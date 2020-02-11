import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.css']
})
export class TechnologyStackComponent implements OnInit {
  public data = [{id: 1, backend: 'c', frontend: 'Usman', bI: 'kens', tools: 'habijabi'},
  {id: 2, backend: 'java', frontend: 'esdf', bI: 'fdsfd', tools: 'habijabi'},
  {id: 3, backend: 'C++', frontend: 'angula', bI: 'janina', tools: 'bootstrap'},


];

  public data2: any;
  rows: FormArray;

  // tslint:disable-next-line: variable-name
  constructor(private router: Router,  private route: ActivatedRoute, private _sidebarservices: SidebarServices) {
  }

  ngOnInit() {
  }
  onSubmit() {

    this._sidebarservices.addData(this.data).subscribe(d => this.data = d );
    console.log(this.data);
  }

  onReceive() {
    this._sidebarservices.getData().subscribe(d => this.data2 = d );
    console.log(this.data2);
  }
  //  onDelete(id:any)
  //  {
  //   this._sidebarservices.deleteData(id).subscribe();
  //  }

  onDelete(id: any) {
    const index = this.data.indexOf(id);
    this.data.splice(index, 1);
  }
  gotoList() {
    this.router.navigate(['/techstack']);
  }

  onUpdateTech() {
   this.router.navigate(['/techUpdate']);
  }

}
