import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAyatDirective } from './directive/scroll-ayat.directive';
import { NgbProgressbarModule,NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MySkillComponent } from './component/my-skill/my-skill.component';
import { WhatIDoComponent } from './component/what-i-do/what-i-do.component';
const NgbYouxtaModules = [
  NgbProgressbarModule,
  NgbTooltipModule
]
@NgModule({
  declarations: [ScrollAyatDirective, MySkillComponent, WhatIDoComponent],
  imports: [
    CommonModule,
    NgbYouxtaModules
  ],
  exports:[ScrollAyatDirective,NgbYouxtaModules,MySkillComponent,WhatIDoComponent]
})
export class ShareModule { }
