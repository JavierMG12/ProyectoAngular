import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img="https://pbs.twimg.com/media/E3uwNOkWUAAqCEY.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
