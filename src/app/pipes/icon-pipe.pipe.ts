import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'iconPipe'
})
export class IconPipePipe implements PipeTransform {

  transform(icon: string): string {
    switch (icon) {
      case '01d':
        return 'clear-day';
      case '01n':
        return 'clear-night';
      case '02d':
        return 'few-clouds';
      case '02n':
        return 'broken-clouds-night';
      case '03d':
        return 'broken-clouds-day';
      case '03n':
        return 'broken-clouds-night';
      case '04d':
        return 'broken-clouds-night';
      case '09d':
        return 'rain-day';
      case '09n':
        return 'rain-night';
      case '10d':
        return 'rain-day';
      case '10n':
        return 'rain-night';
      case '11d':
        return 'thunderstorm';
      case '11n':
        return 'thunderstorm-at-night';

      case '13d':
        return 'snow-at-night';
      case '13n':
        return 'snow';
      case '50d':
        return 'fog-at-day';
      case '50n':
        return 'fog-at-night';
      default:
        return 'fog-at-night';
    }
  }

}
