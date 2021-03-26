import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[fmLazy]'
})
export class FmLazyDirective implements OnInit {
  @Input() url: string = '';

  observer: any;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.createObserver();
  }

  private createObserver() {
    const element = this.element.nativeElement;
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.src = this.url;
          observer.unobserve(element);  
        }
      })
    });

    this.observer.observe(element)
  }
}
