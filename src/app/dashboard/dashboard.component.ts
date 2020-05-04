import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'team-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  

  constructor(private activatedRoute: ActivatedRoute) {
    
  }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.data);
  }

}
