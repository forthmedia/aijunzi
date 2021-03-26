import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[fmLazy]'
})
export class FmLazyDirective implements OnInit, OnDestroy {
  @Input() url: string = '';

  observer: any;

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.createObserver();
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.unobserve(this.element.nativeElement);
    }
  }

  private createObserver() {
    const element = this.element.nativeElement;
    this.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          element.src = this.url;
          observer.unobserve(entry.target);  
        }
      })
    });

    this.observer.observe(element)
  }
}
