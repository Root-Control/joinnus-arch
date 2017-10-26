import {Contains, IsInt, Length, IsEmail, IsFQDN, IsDate, Min, Max, MinLength, MaxLength} from "class-validator";

export class Ubigeo {
	idubigeo: number;
	@MinLength(10, {
        message: "El mínimo debe ser 10 imbécil"
    })
    @MaxLength(50, {
        message: "Muy grande ps imbecil"
    })
	distrito: string;
	@IsEmail()
    email: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
