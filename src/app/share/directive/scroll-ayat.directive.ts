/*--------------------
	Code By - Md Ayatullah Rahmani
--------------------*/

import { Directive, ElementRef, HostListener, OnInit, AfterViewInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, filter, takeUntil } from 'rxjs/operators';
@Directive({
  selector: '[appScrollAyat]'
})
export class ScrollAyatDirective implements OnInit, AfterViewInit {
  ps: PerfectScrollbar | any;
  private _unsubscribeAll: Subject<any>;
  constructor(private elRef: ElementRef) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    // Subscribe to window resize event
    fromEvent(window, 'resize')
      .pipe(
        takeUntil(this._unsubscribeAll),
        debounceTime(150)
      )
      .subscribe(() => {

        // Update the PerfectScrollbar
        this.update();
      });
  }
  ngAfterViewInit(): void {
    this._init();
    setTimeout(() => {
      this.ps.update();
    }, 500);
  }

  _init(): void {
    // Initialize the perfect-scrollbar
    this.ps = new PerfectScrollbar(this.elRef.nativeElement);
    //  this.ps = new PerfectScrollbar(this.elRef.nativeElement,{
    //   wheelSpeed: 2,
    //   wheelPropagation: true,
    //   minScrollbarLength: 20
    // });

    // Unbind 'keydown' events of PerfectScrollbar since it causes an extremely
    // high CPU usage on Angular Material inputs.
    // Loop through all the event elements of this PerfectScrollbar instance
    this.ps.event.eventElements.forEach((eventElement) => {

      // If we hit to the element with a 'keydown' event...
      if (typeof eventElement.handlers['keydown'] !== 'undefined') {
        // Unbind it
        eventElement.element.removeEventListener('keydown', eventElement.handlers['keydown'][0]);
      }
    });
  }

  @HostListener('document:click', ['$event'])
  documentClick(event: Event): void {


    // Update the scrollbar on document click..
    // This isn't the most elegant solution but there is no other way
    // of knowing when the contents of the scrollable container changes.
    // Therefore, we update scrollbars on every document click.
    setTimeout(() => {
      this.ps.update();
    }, 500);
  }

  update(): void {
    // if ( !this.isInitialized )
    // {
    //     return;
    // }

    // Update the perfect-scrollbar
    this.ps.update();
  }



  ngOnDestroy(): void {
    // Destroy the perfect-scrollbar
    this.ps.destroy();
  }

}
