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
  constructor(private router: Router,  private route: ActivatedRoute, private sidebarservices: SidebarServices) { }

  ngOnInit() {
  }

  gotoList() {
    this.router.navigate(['/M&E']);
  }

}
