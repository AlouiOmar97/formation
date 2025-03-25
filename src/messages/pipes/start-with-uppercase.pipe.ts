import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class StartWithUppercasePipe implements PipeTransform {
  transform(value: string) {
    if (!/^[A-Z]/.test(value)) {
      throw new BadRequestException('La chaîne doit commencer par une lettre majuscule');
    }
    return value;
  }
}