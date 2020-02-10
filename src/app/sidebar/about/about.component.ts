import { SidebarServices } from './../../services/sidebar.services';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about: any;
  public data = [];
  public title: string ;
  public desc: string;
  constructor(private router: Router,  private route: ActivatedRoute, private sidebarservices: SidebarServices, public fb: FormBuilder) {

      this.about = this.fb.group({
          title : [''],
          desc: ['']
      });
  }

  ngOnInit() {
    // if (id) {

    //      this._sidebarservices.getData().subscribe ( res =>{
    //     this.about.patchValue({
    //         title : res.title,
    //         desc : res.desc
    //     });

    //    }

    // );   }
    // this._sidebarservices.getData().subscribe(d => this.data = d );
  }

  // onSubmit() {
  //   const formData = new FormData();
  //   formData.append('title', this.about.get('title').value);
  //   formData.append('description', this.about.get('desc').value);

  //   const id = this.about.get('id').value;

  //   if(id){
  //       this._sidebarservices.updateData(formData, +id).subscribe(
  //         res =>{
  //           this.router.navigate(['/content']);
  //         }
  //       );
  //   } else{
  //     console.log('kichuekta');
  //   }

  // }

  // onDelete(id){
  //   this._sidebarservices.deleteData(+id).subscribe(
  //     res =>{
  //       console.log(res);
  //     }
  //   );
  // }
  // ngOnDestroy(): void {
  //   console.log(this.pdata);
  // }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.about.get('title').value);
    formData.append('desc', this.about.get('desc').value);

    console.log(this.about.value);

    this.sidebarservices.updateData(formData).subscribe( (response) => console.log(response));
  }

  onDelete() {

    this.sidebarservices. deleteData(1).subscribe(
     res => {
        console.log(res);
         }
      );
  }

  gotoList() {
    this.router.navigate(['/about']);
  }

}
