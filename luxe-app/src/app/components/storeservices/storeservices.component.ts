import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-storeservices',
  templateUrl: './storeservices.component.html',
  styleUrls: ['./storeservices.component.css']
})
export class StoreservicesComponent implements OnInit {

  title:string;
  servicetitle:string;
  serviceitems:serviceitem[];
  disclaimer:string;


  constructor(private dataService:DataService) {
    console.log('StoreservicesComponent constructor ran...');
  }

  ngOnInit() {
    this.title = 'Services';
    this.dataService.getData().subscribe((serviceitems) => {
      console.log(serviceitems);
      this.serviceitems = serviceitems;
    });
    // this.services = [
    //   {
    //     title = 'Haircuts & Texture',
    //     items = [
    //       {
    //         title = 'Women\'s Haircut',
    //         price = '$40.00'
    //       },
    //       {
    //         title = 'Curly Haircut',
    //         price = '$95.00'
    //       },
    //       {
    //         title = 'Men\'s Haircut',
    //         price = '$35.00'
    //       },
    //       {
    //         title = 'Chilren\'s Haircut',
    //         price = '$30.00'
    //       },
    //       {
    //         title = 'Dusting',
    //         price = '$20.00'
    //       },
    //       {
    //         title = 'Perms',
    //         price = '$70.00'
    //       },
    //       {
    //         title = 'Keratin Smoothing',
    //         price = '$250.00'
    //       }
    //     ]
    //   },
    // ];
    this.disclaimer = '** All prices above are estimated. Please schedule a free consultation for an exact price. **';
  }

}

interface serviceitem {
  title:string,
  price:number
}
