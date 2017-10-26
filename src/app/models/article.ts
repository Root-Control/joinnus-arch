export class Article {
	title: string;
	content: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }	
}
