import { Component, OnInit } from '@angular/core';
import { HttpTestsService } from '../../http-tests/http-tests.service';
import { Book } from '../../models/book';
import { Path } from '../../app.path.config';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {
	public id
	public book
	private basepath

	constructor(private path: Path, private service: HttpTestsService<Book>, private route: ActivatedRoute, private router: Router) {
		this.basepath 	= path.getBookPath()['book']
		this.book 		= new Book()
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			if(params['idbook'] != undefined) {
				this.id = params['idbook']
				this.findBookById()
			} else {
				this.id = ''				
			}
		});
	}

	findBookById() {
		this.service.findById(this.basepath, this.id)
			.then(
			    data => (this.book = data),
			    err => this.router.navigate(['/book/createorupdate'])
			)
	}

	createOrUpdate() {
		if(this.id == '') {
			this.createBook()
		} else {
			this.updateBook()
		}
	}
	createBook() {
		this.service.create(this.basepath, this.book)
			.then(
				data => this.router.navigate(['/book/detail/', data._id]),
			    err => console.log(JSON.parse(err._body))
			)
	}

	updateBook() {
		this.service.update(this.basepath, this.book)
			.then((data) => {
			this.router.navigate(['/book/detail/', data._id]);
		});
	}

	deleteBook() {
		var confirmation = confirm("Are you sure?")
		if(confirmation == true) {
			this.service.delete(this.basepath, this.id)
				.then((data) => {
				this.router.navigate(['/book']);
			});			
		} else {
			return false
		}

	}

}