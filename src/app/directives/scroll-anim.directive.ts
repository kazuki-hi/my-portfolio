import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';

@Directive({
    selector: '[appScrollAnim]',
    standalone: true
})
export class ScrollAnimDirective implements OnInit, OnDestroy {
    private observer: IntersectionObserver | undefined;

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'scroll-anim-hidden');

        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.1 // 10%が見えたら発火
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(this.el.nativeElement, 'scroll-anim-visible');
                    this.renderer.removeClass(this.el.nativeElement, 'scroll-anim-hidden');
                    // 一度表示されたら監視を終了する場合
                    this.observer?.unobserve(this.el.nativeElement);
                }
            });
        }, options);

        this.observer.observe(this.el.nativeElement);
    }

    ngOnDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    }
}
