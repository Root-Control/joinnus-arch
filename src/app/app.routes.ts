import { Routes } from '@angular/router'

//  Components
import { AppComponent } from './app.component'
import { TodoExampleComponent } from './todo-example/todo-example.component'
import { HttpTestsComponent } from './http-tests/http-tests.component'
import { ArticleComponent } from './article/article.component'
import { BookListComponent } from './book/book-list/book-list.component'
import { BookDetailComponent } from './book/book-detail/book-detail.component'
import { BookFormComponent } from './book/book-form/book-form.component'
import { BookSearchComponent } from './book/book-search/book-search.component'

export const rootRouterConfig: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: 'example', component: TodoExampleComponent },
	{ path: 'http', component: HttpTestsComponent },
	{ path: 'article', component: ArticleComponent },
	//	Book Routes
	{ path: 'book', component: BookListComponent },
	{ path: 'book/search', component: BookSearchComponent },
	{ path: 'book/detail/:id', component: BookDetailComponent },
	{ path: 'book/createorupdate', component: BookFormComponent },
	{ path: 'book/createorupdate/:idbook', component: BookFormComponent },
	// Book Routes
	{ path: '**', redirectTo: 'home' }
	];