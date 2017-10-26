import { Component, AfterViewInit } from '@angular/core';
import { AuthenticationService } from './http-tests/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	userdata = { firstName: ''}
	title = 'app';
	constructor(private authenticationService: AuthenticationService) {
	}

	ngAfterViewInit() {
      	if(window['user'] !=  null) {
      		this.userdata = window['user']
      		console.log(this.userdata)
      	}
 	}

	signIn() {

		let data = {
			usernameOrEmail: 'HiroshixD',
			password: 'Secretsystem1@'
		}
		this.authenticationService.signIn(data)
			.then(data=> {
				this.userdata = data;
				console.log(this.userdata);
			})
			.catch(err=> {
				console.log(err);
			})
	}
}