import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor: string; // 在指令内部，该属性叫 highlightColor，在外部，你绑定到它地方，它叫 appHighlight。
  @Input() defaultColor: string;
  constructor(private el: ElementRef) {
      // el.nativeElement.style.backgroundColor = 'yellow'; // 設置背景顔色
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
