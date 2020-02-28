import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'picturePipes'
})
export class PicturePipesPipe implements PipeTransform {

  transform(cod: any): string {
    switch (cod) {
      case 200:
        return 'img200';
      case 201:
        return 'img201';
      case 202:
        return 'img202';
      case 210:
        return 'img210';
      case 211:
        return 'img211';
      case 212:
        return 'img212';
      case 221:
        return 'img221';
      case 230:
        return 'img230';
      case 231:
        return 'img231';
      case 223:
        return 'img232';
      case 300:
        return 'img300';
      case 301:
        return 'img301';
      case 302:
        return 'img302';
      case 310:
        return 'img310';
      case 311:
        return 'img311';
      case 312:
        return 'img312';
      case 313:
        return 'img313';
      case 314:
        return 'img314';
      case 321:
        return 'img321';
      case 500:
        return 'img500';
      case 501:
        return 'img501';
      case 502:
        return 'img502';
      case 503:
        return 'img503';
      case 504:
        return 'img504';
      case 511:
        return 'img511';
      case 520:
        return 'img520';
      case 522:
        return 'img522';
      case 531:
        return 'img531';
      case 600:
        return 'img600';
      case 601:
        return 'img601';
      case 602:
        return 'img602';
      case 611:
        return 'img611';
      case 612:
        return 'img612';
      case 613:
        return 'img613';
      case 615:
        return 'img615';
      case 616:
        return 'img616';
      case 620:
        return 'img620';
      case 621:
        return 'img621';
      case 622:
        return 'img622';
      case 701:
        return 'img701';
      case 711:
        return 'img711';
      case 721:
        return 'img721';
      case 731:
        return 'img731';
      case 741:
        return 'img741';
      case 751:
        return 'img751';
      case 761:
        return 'img761';
      case 762:
        return 'img762';
      case 771:
        return 'img771';
      case +781:
        return 'img781';
      case 800:
        return 'img800';
      case 801:
        return 'img801';
      case 802:
        return 'img802';
      case 803:
        return 'img803';
      case 804:
        return 'img804';
      default:
        return 'imgDefault';
    }
  }
}
