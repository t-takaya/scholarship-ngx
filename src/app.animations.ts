import {
  animate,
  animateChild,
  trigger, transition, style, query, group
} from '@angular/animations'

/**
 * Make the animation definition available in your application by
 * adding the reusable animation (slideInAnimation)
 * to the animations metadata of the AppComponent.
 */
export const slideInAnimation = trigger('routeAnimations', [
  // transition('HomePage <=> AboutPage', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ]),
  //   query(':enter', [
  //     style({ left: '-100%' })
  //   ]),
  //   query(':leave', animateChild()),
  //   group([
  //     query(':leave', [
  //       animate('300ms ease-out', style({ left: '100%' }))
  //     ]),
  //     query(':enter', [
  //       animate('300ms ease-out', style({ left: '0%' }))
  //     ])
  //   ]),
  //   query(':enter', animateChild()),
  // ]),
  transition('* <=> FilterPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        top:      0,
        left:     0,
        width:    '100%',
        position: 'absolute',
      })
    ]),
    query(':enter', [ style({ left: '100%', zIndex: 900 }) ]),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [ animate('300ms ease-out', style({ left: '-15%' })) ], { optional: true }),
      query(':enter', [ animate('400ms ease-out', style({ left:   '0%' })) ])
    ]),
    query(':enter', animateChild()),
  ])
])
