import { Component, OnInit } from '@angular/core';
import { AfService } from '../../providers/af.service';
import { User } from '../../providers/user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class AppNavbarComponent implements OnInit {
  user: User;
  constructor(public afService: AfService) {}

  ngOnInit() {
    this.afService.user$.subscribe(user => (this.user = user));
  }
}
