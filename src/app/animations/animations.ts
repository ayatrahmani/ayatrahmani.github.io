import { trigger, transition, animate, style, state,query } from '@angular/animations';
  

  // Routable animations
  export const slideInAnimation =
 [
    trigger(
        'slideView',
        [
          state('true', style({ transform: 'translateX(100%)', opacity: 0 })),
          state('false', style({ transform: 'translateX(0)', opacity: 1 })),
          transition('0 => 1', animate('500ms', style({ transform: 'translateX(0)', 'opacity': 1 }))),
          transition('1 => 1', animate('500ms', style({ transform: 'translateX(100%)', 'opacity': 0 }))),
        ]),
  
      trigger('slideInOut', [
        transition(':enter', [
          style({ transform: 'translateY(10%)', opacity: 0 }),
          animate('500ms ease-in', style({ transform: 'translateY(0%)', 'opacity': 1 }))
        ]),
        
        
        transition(':leave', [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate('0ms ease-in', style({ transform: 'translateY(100%)', 'opacity': 0 }))
        ])
      ]),
      trigger('slideInOut1', [
        transition(':enter', [
          style({ transform: 'translateX(100%)', opacity: 0 }),
          animate('800ms ease-in', style({ transform: 'translateX(0%)', 'opacity': 1 }))
        ]),
        
        
        transition(':leave', [
          style({ transform: 'translateX(0%)', opacity: 1 }),
          animate('0ms ease-in', style({ transform: 'translateX(100%)', 'opacity': 0 }))
        ])
      ]),
      trigger('fade', [ 
        transition('void => *', [
          style({ opacity: 0 }), 
          animate(2000, style({opacity: 1}))
        ]) 
      ]),
      
 ]
  

 export const fadeAnimation =

    trigger('fadeAnimation', [

        transition( '* => *', [

            query(':enter', 
                [
                    style({ opacity: 0 })
                ], 
                { optional: true }
            ),

            query(':leave', 
                [
                    style({ opacity: 1 }),
                    animate('0.5s', style({ opacity: 0 }))
                ], 
                { optional: true }
            ),

            query(':enter', 
                [
                    style({ opacity: 0 }),
                    animate('0.5s', style({ opacity: 1 }))
                ], 
                { optional: true }
            )

        ])

    ]);
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at http://angular.io/license
  */