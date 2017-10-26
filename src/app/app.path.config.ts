import { Injectable } from '@angular/core';
@Injectable()


export class Path {
	getPath() {
		return 'http://localhost:3000'
	}
	getBookPath() {
		return { 'book'		: '/api/books',
				 'search'	: '/api/books/search'}
	}
}
