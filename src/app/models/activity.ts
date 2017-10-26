export class Activity {
	idevent: number;
	title: string;
	price: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }	
}
