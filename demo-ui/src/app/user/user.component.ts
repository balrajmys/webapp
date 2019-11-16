import {Component, OnInit} from '@angular/core';

import {AppDataService} from '../services/app-data.service';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  roles;

  constructor(private appDataService: AppDataService, private userService: UserService) {
  }

  ngOnInit() {
    this.roles = this.userService.getUserPagesJWT();
  }
}
