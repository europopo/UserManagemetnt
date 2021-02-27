import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canflyingPure',
  pure: false // 虽然非纯管道很实用，但要小心使用。长时间运行非纯管道可能会大大降低你的应用速度。
})
export class CanflyingPurePipe implements PipeTransform {

  transform(allHeroes: any) {
    return allHeroes.filter(hero => hero.canfly);
  }

}
