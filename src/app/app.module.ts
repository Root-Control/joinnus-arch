import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { rootRouterConfig } from './app.routes';

import { AppComponent } from './app.component';
import { TodoExampleComponent } from './todo-example/todo-example.component';
import { HttpTestsComponent } from './http-tests/http-tests.component';

//  Providers
import { HttpTestsService } from './http-tests/http-tests.service';
import { AuthenticationService } from './http-tests/authentication.service';
import { ArticleComponent } from './article/article.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BookSearchComponent } from './book/book-search/book-search.component';

import { Path } from './app.path.config';

@NgModule({
  declarations: [
    AppComponent,
    TodoExampleComponent,
    HttpTestsComponent,
    ArticleComponent,
    BookListComponent,
    BookDetailComponent,
    BookFormComponent,
    BookSearchComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [Path, HttpTestsService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
