import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { SidebarServices } from './../../services/sidebar.services';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { Technology } from './Technologys';
import { Technology2 } from './Technology2';
@Component({
  selector: 'app-technology-stack',
  templateUrl: './technology-stack.component.html',
  styleUrls: ['./technology-stack.component.css']
})
export class TechnologyStackComponent implements OnInit {

  data: any = [
    {Name: 'backend', Description: '.NET,PHP'},
    {Name: 'frontend', Description: 'C++,Java'},
    {Name: 'bi', Description: 'janina'},
    {Name: 'tools', Description: 'node.js'},
];

//   public data2: any;
// //   rows: FormArray; { backend: 'c', frontend: 'Usman', bI: 'kens', tools: 'habijabi'},
//   { backend: 'java', frontend: 'esdf', bI: 'fdsfd', tools: 'habijabi'},
//   { backend: 'C++', frontend: 'angula', bI: 'janina', tools: 'bootstrap'},
//   { backend: 'java', frontend: 'esdf', bI: 'fdsfd', tools: 'habijabi'},
//   { backend: 'C++', frontend: 'angula', bI: 'janina', tools: 'bootstrap'},
//   fb: any;
     myGroup: any;
     val: any;

     keep: any;

  techs: Technology[];
  // techSelected: number;
  techSelected: any = {};
  modifiedText: string;

  constructor(private router: Router,  private route: ActivatedRoute,
              private  sidebarservices: SidebarServices, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.myGroup =  this.formBuilder.group({
      streamsTech: this.formBuilder.array([
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
  get streamsTech() {
    return this.myGroup.get('streamsTech') as FormArray;
  }
  addStreamsTech( ) {
    this.streamsTech.push(this.formBuilder.control(''));
  }

  // addButtonClick(): void {
  // //  (this.fb.get('other') as FormArray).push(this.addOtherSkillFormGroup());
  // }

  // onSubmit() {

  //   this.sidebarservices.addData(this.data).subscribe(d => this.data = d );
  //   console.log(this.data);
  // }

  // onReceive() {
  //   this.sidebarservices.getData().subscribe(d => this.data2 = d );
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

    if (id) {

        if (this.techSelected.value === this.data.value) {
          console.log(this.val);

          // this.myGroup.patchValue({keep: this.val});
          //   this.streamsTech[1]=['']

          // for ( let ss of this.streamsTech.controls) {
          //   this.myGroup.patchValue({[0]: this.val});
          // }

          
          this.streamsTech.setValue([this.val]);
      }
    }
  }
}
