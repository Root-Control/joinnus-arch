export class User {
	id: number;
	name: string;
	last_name: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }	
}
