# AI Junzi

Forthmedia JavaScript coding project. Herein, I'll assume you know enough *JavaScript* and *Angular* to follow along.

### Lazy Loading

[See this code in action](https://www.forth-media.com/junzi)

The idea behind *lazy loading* of images is to improve page performance by deferring image downloads until your user wants to view them. This can be done with *JavaScript*, but how do you defer setting an HTML IMG SRC attribute in *Angular*, which discourages DOM manipulation?

This project wraps the *Intersection Observer API* inside of an Angular **Custom Directive**.

``` javascript
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
```

I have specified the keyword *fmLazy* for my custom directive, which in this use case goes on an IMG tag.

``` javascript
@Directive({
  selector: '[fmLazy]'
})
```

You'll need an **ElementRef** in the directive *constructor* to target the DOM element.

``` javascript
  constructor(private element: ElementRef) { }

```

Apply the custom **Directive** *selector* as an HTML element attribute. Here, the directive **Input** property named *url* has been set using Angular property binding. The **ngFor** structural directive loops through an array of image urls named *deferred*, and creates a number of HTML IMG elements that will be dynamically *lazy loaded* when the page is scrolled.

``` html
    <ng-container *ngFor="let d of deferred">
        <img fmLazy [url]="d"/>
    </ng-container>
```

The first image on the page sets an IMG SRC attribute as you normally would, because that image is probably in the viewport. Keep in mind that the keyword *url* which I have implemented on the IMG tag is not an actual HTML attribute. It's just an **Input** variable name, for this example.

``` html
    <img [src]="image"/>
```

And that's all there is to it. This code defers setting an IMG SRC until the *IntersectionObserver* detects that the DOM element *isIntersecting*, which causes the browser to fetch the image. Once this is done you can stop the observer using *unobserve*.