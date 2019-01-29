import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'porudzbine'
})
export class PorudzbinePipe implements PipeTransform {

  transform(value: any, filterString: string): any {
    if (filterString === "") {
      return value;
    }
    filterString = filterString.toLowerCase();
    let arrayOfResults = [];
    for (let result of value) {
      let kolicina = result.kolicina;
      let ime = result.nazivJela;
      let adresa = result.ADRESAISPORUKE;
      if (ime.toLowerCase() === filterString 
      || adresa.toLowerCase() === filterString
      || kolicina.toLowerCase() === filterString) {
        arrayOfResults.push(result);
      }
    }
    return arrayOfResults;
  }

}
