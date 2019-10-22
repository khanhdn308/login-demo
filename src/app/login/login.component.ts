import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() username: string;
  @Input() password: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  login(): void {
    if (this.loginService.checkUser(new User(this.username, this.password)) === true) {
      this.router.navigate(['main']);
    } else {
      alert('Wrong username or password');
    }
  }
}
