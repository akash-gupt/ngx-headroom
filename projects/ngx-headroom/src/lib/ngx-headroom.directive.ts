import { Directive, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Headroom from 'headroom.js';

import { NgxHeadroomOption } from './ngx-headroom.option';

@Directive({
  selector: '[Ngxheadroom]'
})
export class NgxHeadroomDirective implements OnInit {
  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;
  }
  private element: HTMLElement;
  headroom: any;
  @Input() options: NgxHeadroomOption = {
    offset: 300,
    tolerance: 1,
    classes: {
      initial: 'animated',
      pinned: 'flipInX',
      unpinned: 'flipOutX'
    }
  };

  // callback when pinned
  @Output() pinned = new EventEmitter();
  // callback when unpinned
  @Output() unpinned = new EventEmitter();
  // callback when above offset
  @Output() toped = new EventEmitter();
  // callback when  below offset
  @Output() notToped = new EventEmitter();
  // callback when at bottom of page
  @Output() bottomed = new EventEmitter();
  // callback moving away from bottom of page
  @Output() notBottomed = new EventEmitter();

  ngOnInit() {
    this.initalizeEvents();
    this.headroom = new Headroom(this.element, this.options);
    this.headroom.init();
  }

  initalizeEvents() {
    this.options.onPin = () => {
      this.pinned.emit();
    };
    this.options.onUnpin = () => {
      this.unpinned.emit();
    };
    this.options.onTop = () => {
      this.toped.emit();
    };
    this.options.onNotTop = () => {
      this.notToped.emit();
    };
    this.options.onBottom = () => {
      this.bottomed.emit();
    };
    this.options.onNotBottom = () => {
      this.notBottomed.emit();
    };
  }

  /**
   * @description destroy the headroom instance, removing event listeners and any classes added
   */
  destroy() {}

  /**
   * @description forcibly set the headroom instance's state to pinned
   */
  pin() {}

  /**
   * @description forcibly set the headroom instance's state to unpinned
   */
  unpin() {}

  /**
   * @description  freeze the headroom instance's state (pinned or unpinned), and no longer respond to scroll events
   */
  freeze() {}

  /**
   * @description resume responding to scroll events
   */
  unfreeze() {}
}
