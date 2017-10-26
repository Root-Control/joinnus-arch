export class Book{
	_id: string;
	name: string;
	pages: number;
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
}


/*import { IBook } from '../Interfaces/ibook';

export class Book implements IBook{
	name: string;
	pages: number;
	constructor(values: Object = {}) {
		Object.assign(this, values);
	}
 
  path() {
  	return '/api/books'
  }
}*/
