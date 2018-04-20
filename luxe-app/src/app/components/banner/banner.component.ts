import { Component, OnInit } from '@angular/core';

import { ScheduleComponent } from '../schedule/schedule.component';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  title = 'Welcome to Luxe Salon';
  desc = 'A full service Framesi / Redken hair salon located in beautiful historic downtown Snohomish, Washington. We look forward to making you look your best for any occasion.';

  constructor() {
    console.log('BannerComponent constructor ran...');
  }

  ngOnInit() {
  }

}
