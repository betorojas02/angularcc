import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  imageUrl = 'https://image.freepik.com/vector-gratis/logo-icono-letra-c_6711-286.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
