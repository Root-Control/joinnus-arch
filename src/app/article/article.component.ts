import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article';
import { HttpTestsService } from '../http-tests/http-tests.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	basepath   = '/api/articles'
	article    = new Article()
	articles   = []
	constructor(private service: HttpTestsService<Article>) { }

	ngOnInit() {
		this.listArticles()
	}

	listArticles() {
		this.service.list(this.basepath)
			.then((data) => {
			this.articles = data
			console.log(this.articles)
			//console.log(data);
		});
	}

	createArticle() {
		this.service.create(this.basepath, this.article)
			.then((data) => {
			this.articles.push(data)
		});
  	}

	updateArticle(article) {
		article.title = 'Editado1'
		article.content = 'Content editado 1'
		let model = new Article(article)

		this.service.update(this.basepath, model)
			.then((data) => {
			console.log('Respuesta put')
			console.log(data)
		});
	}

	deleteArticle(id) {
		this.service.delete(this.basepath, id)
			.then((data) => {
			console.log('Respuesta delete')
			console.log(data)
			//console.log(data);
		});
	}

	findArticleById(id) {
		this.service.findById(this.basepath, id)
			.then((data) => {
			console.log(data)
		})
	}
}
