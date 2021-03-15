import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'junzi-lazy',
  templateUrl: './junzi-lazy.component.html',
  styleUrls: ['./junzi-lazy.component.scss']
})
export class JunziLazyComponent implements OnInit {

  deferred: string[] = [
    '/assets/images/mpav-2.png',
    '/assets/images/mpav-2.png',
    '/assets/images/mpav-2.png',
    '/assets/images/mpav-2.png'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
