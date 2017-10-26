import { Component, OnInit } from '@angular/core';
import { HttpTestsService } from '../../http-tests/http-tests.service';
import { Path } from '../../app.path.config';
import { Book } from '../../models/book';

@Component({
	selector: 'app-book-search',
	templateUrl: './book-search.component.html',
	styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
	public text
	public books
	private basepath
	
	constructor(private path: Path, private bookService: HttpTestsService<Book>) {
		this.basepath 	= path.getBookPath()
	}

	ngOnInit() {}

	getByText():void {
		let data = { text : this.text }
		let url = this.basepath['search']
		this.bookService.customPost(url, data)
			.then((data) => {
			this.books = data
			console.log(this.books)
		});
	}

}
