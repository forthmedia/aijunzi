import { Component } from '@angular/core';

@Component({
  selector: 'junzi-lazy',
  templateUrl: './junzi-lazy.component.html',
  styleUrls: ['./junzi-lazy.component.scss']
})
export class JunziLazyComponent {
  image: string = '/assets/images/mpav-1.png';
  deferred: string[] = [
    '/assets/images/mpav-2.png',
    '/assets/images/mpav-3.png',
    '/assets/images/mpav-4.png',
    '/assets/images/mpav-5.png'
  ];
}
