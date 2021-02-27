import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canflying'
})
export class CanflyingPipe implements PipeTransform {

  transform(allHeroes: any) {
    return allHeroes.filter(hero => hero.canfly);
  }

}
