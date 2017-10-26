import { Component, OnInit } from '@angular/core';
import { HttpTestsService } from '../../http-tests/http-tests.service';
import { ActivatedRoute } from '@angular/router';
import { Path } from '../../app.path.config';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
	private id
	public 	book
	private basepath

	constructor(private service: HttpTestsService<Book>, private route: ActivatedRoute,  private path: Path) {
		this.basepath 	= path.getBookPath()['book']
		this.book = {}
	}

	ngOnInit() {

	    this.route.params.subscribe(params => {
	       this.id = params['id'];
	    });

		this.service.findById(this.basepath, this.id)
			.then((data) => {
			this.book = data;
			console.log(this.book)
		})
	}

}
