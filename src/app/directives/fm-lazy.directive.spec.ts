import { ElementRef } from '@angular/core';
import { FmLazyDirective } from './fm-lazy.directive';

describe('FmLazyDirective', () => {
  it('should create an instance', () => {
    const element = new ElementRef('div');
    const directive = new FmLazyDirective(element);
    expect(directive).toBeTruthy();
  });
});
