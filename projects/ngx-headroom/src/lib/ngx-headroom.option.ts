interface ITolerance {
  up: number;
  down: number;
}

type Tolerance = number | ITolerance;

export interface NgxHeadroomOption {
  // vertical offset in px before element is first unpinned
  offset?: number;
  // scroll tolerance in px before state changes
  tolerance?: Tolerance;

  classes?: {
    // when element is initialised
    initial?: string;
    // when scrolling up
    pinned?: string;
    // when scrolling down
    unpinned?: string;
    // when above offset
    top?: string;
    // when below offset
    notTop?: string;
    // when at bottom of scoll area
    bottom?: string;
    // when not at bottom of scroll area
    notBottom?: string;
    // when frozen method has been called
    frozen?: string;
  };

  scroller?: HTMLElement;

  // callback when pinned, `this` is headroom object
  onPin?: CallableFunction;
  // callback when unpinned, `this` is headroom object
  onUnpin?: CallableFunction;
  // callback when above offset, `this` is headroom object
  onTop?: CallableFunction;
  // callback when below offset, `this` is headroom object
  onNotTop?: CallableFunction;
  // callback when at bottom of page, `this` is headroom object
  onBottom?: CallableFunction;
  // callback when moving away from bottom of page, `this` is headroom object
  onNotBottom?: CallableFunction;
}
