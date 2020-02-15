import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { Technology } from './Technologys';

@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.css']
})
export class TechnologyStackComponent implements OnInit {
//   public data = [{id: 1, backend: 'c', frontend: 'Usman', bI: 'kens', tools: 'habijabi'},
//   {id: 2, backend: 'java', frontend: 'esdf', bI: 'fdsfd', tools: 'habijabi'},
//   {id: 3, backend: 'C++', frontend: 'angula', bI: 'janina', tools: 'bootstrap'},


// ];
//   public data2: any;
//   rows: FormArray;
//   fb: any;
     myGroup: any;

  techs: Technology[];
  //techSelected: number;
  techSelected: any = {};
  modifiedText: string;


  // tslint:disable-next-line: variable-name
  constructor(private router: Router,  private route: ActivatedRoute,
    private  _sidebarservices: SidebarServices, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.myGroup =  this.formBuilder.group({
      backend : [''],
      frontend: [''],
      bi: [''],
      tools: [''],
      aliases: this.formBuilder.array([
        this.formBuilder.control('')
      ])
  });

    this. techs = [
    {techId: 1, techName: 'backend'},
    {techId : 2, techName: 'frontend'},
    {techId : 3, techName: 'bi'},
    {techId : 4, techName: 'tools'}];
    
  //  this.techSelected = 1;

  }

  onTechSelected(val: Technology) {
    this.modifiedText = 'selected name' + val.techName + 'the  id value ' + val.techId + 'was selected form dropdown' ;


  }
  get aliases() {
    return this.myGroup.get('aliases') as FormArray;
  }
  
  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }

  // addButtonClick(): void {
  // //  (this.fb.get('other') as FormArray).push(this.addOtherSkillFormGroup());
  // }

  // onSubmit() {

  //   this._sidebarservices.addData(this.data).subscribe(d => this.data = d );
  //   console.log(this.data);
  // }

  // onReceive() {
  //   this._sidebarservices.getData().subscribe(d => this.data2 = d );
  //   console.log(this.data2);
  // // }
  // onDelete(id: any) {
  //   const index = this.data.indexOf(id);
  //   this.data.splice(index, 1);
  // }
  gotoList() {
    this.router.navigate(['/techstack']);
  }

  onUpdateTech() {
   this.router.navigate(['/techUpdate']);
  }

  addItem(id: any) {
    this.myGroup.setValue({
      backend: 'abc',
      frontend: 'def',
      bi: 'sfd',
      tools: 'ci'
   });
  }

    

}
