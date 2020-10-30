import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.page.html',
  styleUrls: ['./datos-personales.page.scss'],
})
export class DatosPersonalesPage {

  login: any = { username: '', password: '' };

  constructor() { }

  onLogin() {
    console.log('user name:', this.login.username );
    console.log('user password', this.login.password );
  }
}
