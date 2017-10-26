import { Component, OnInit } from '@angular/core';
import { HttpTestsService } from '../../http-tests/http-tests.service';
import { Path } from '../../app.path.config';
import { Book } from '../../models/book';
import  $ from 'jquery';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
	//	Setting variables
	public books
	private basepath

	constructor(private service: HttpTestsService<Book>,  private path: Path) {
		//	Setting values	
		this.basepath 	= path.getBookPath()['book'];
	}

  ngOnInit() {
  	this.listBooks()
  }

	  listBooks(): void {
	    this.service
	        .list(this.basepath)
	        .then((books) => {
	        	this.books = books
	        	console.log(books)
	        	$("#holis").fadeOut();
	        });
	  }
}
	  