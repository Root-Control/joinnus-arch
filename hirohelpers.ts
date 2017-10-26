  //	Servicio simple que devuelve respuesta json
  list(modelpath) {
    return this.http.get(this.basepath + modelpath)
      .map((response) => response.json());
  }

//	Servicio que devuelve una promesa y captura un tipo de dato/objeto
    list2(modelpath): Promise<T[]> {
    return this.http.get(this.basepath + modelpath)
               .toPromise()
               .then((response) => response.json() as T[])
  }




  // Consumiendo el servicio simple (en component)
    listBooks() {
    this.service.list(this.basepath)
      .subscribe((data) => {
      this.books = data
      console.log(this.books)
    });
  }


//  Consumiendo el servicio con promesa (en component)
    listBooks2(): void {
      this.service
          .list2(this.basepath)
          .then((books) => {
            console.log('books')
            console.log(books)
          });
    }