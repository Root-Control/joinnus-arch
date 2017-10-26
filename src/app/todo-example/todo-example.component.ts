import { Component, OnInit } from '@angular/core';
import { Activity } from '../models/activity';
import { Ubigeo } from '../models/ubigeo';
import { Hero } from '../models/hero';

import { validate } from 'class-validator';

@Component({
  selector: 'app-todo-example',
  templateUrl: './todo-example.component.html',
  styleUrls: ['./todo-example.component.css']
})
export class TodoExampleComponent implements OnInit {

	constructor () {}
	heroes = new Array<Hero>()
	ubigeo = new Ubigeo()
	heroe = new Hero()
	title = ''
	//	Asignando valores a ubigeo (hardcodeados desde la clase Ubigeo)

	crearNuevoUbigeo() {
		validate(this.ubigeo).then(errors => {
		    if (errors.length > 0) {
		        console.log("validation failed. errors: ", errors);
		        for (let item of errors) {
				    let obj = item.constraints
				    console.log(obj[Object.keys(obj)[0]])
				}
		    } else {
		        console.log("validation succeed");
		        //	Request Post
		    }
		});
	}

	// Asignando valores a heroes desde un array simple de objetos

  ngOnInit() {
	this.ubigeo =  new Ubigeo({ idubigeo: 1, distrito: 'Lima', email: '1' })
  	//	Ejemplo de doble databinding
  	this.title = "Welcome to Angular's God tutorial"

  	this.heroes = [{'id':1, name: 'Flash'},{'id':2, name: 'Arrow'}]

  	console.log(this.ubigeo)
  }

  selectChanged() {
  	alert('Elegiste al heroe: ' + this.heroe['nombre'])
  }

  testClickButton() {
  	//	Testing (click) Directive
  	alert('Testing click directive, button its working :D')
  }
}
