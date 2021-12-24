import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class RotateDirective {
  deg: number = 0;

  @Input()
  step: string = '10';

  @Input('rotate')
  initialRotation = '0';

  constructor(private el: ElementRef) {}
  ngOnInit() {
    this.deg = +this.initialRotation;
    this.el.nativeElement.style.transform = `rotate(${this.initialRotation}deg)`;
  }

  @HostListener('click', ['$event'])
  onClickEvent(event: MouseEvent) {
    if (event.shiftKey) this.deg -= +this.step;
    else this.deg += +this.step;
    this.el.nativeElement.style.transform = `rotate(${this.deg}deg)`;
  }
}
