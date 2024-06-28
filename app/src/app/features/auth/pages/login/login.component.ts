import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { IUserRequest } from '../../interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public userRequest: IUserRequest = { email: '', password: '' };

  constructor(private auth: AuthService) {}

  public login(): void {
    this.auth.login(this.userRequest).subscribe(response => {
      console.log(response);
    });
  }
}
