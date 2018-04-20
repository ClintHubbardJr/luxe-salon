import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  message:string;
  phone:string;
  schedule:string[];

  constructor() {
    console.log('ScheduleComponent constructor ran...');
  }

  ngOnInit() {
    this.message = 'Please call today to schedule your appointment.';
    this.phone = '360-863-2554';
    this.schedule = [
      'Sun - Mon: Appt Only',
      'Tue - Thu: 10am - 8pm',
      'Fri - Sat 10am - 5pm'
    ];
  }
}
