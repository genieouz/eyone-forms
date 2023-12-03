import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialReferenceFormComponent } from './form1/social-reference-form/social-reference-form.component';
import { TechnicalNoteFormComponent } from './form2/technical-note-form/technical-note-form.component';
import { InternalSupervisionFormComponent } from './form3/internal-supervision-form/internal-supervision-form.component';
import { TrainingThemeSheetFormComponent } from './form4/training-theme-sheet-form/training-theme-sheet-form.component';
import { SocialCareFormComponent } from './form5/social-care-form/social-care-form.component';

const routes: Routes = [
  {
    path: "social-reference",
    component: SocialReferenceFormComponent
  },
  {
    path: "technical-note",
    component: TechnicalNoteFormComponent
  },
  {
    path: "internal-supervision",
    component: InternalSupervisionFormComponent
  },
  {
    path: "training-theme-sheet",
    component: TrainingThemeSheetFormComponent
  },
  {
    path: "social-care",
    component: SocialCareFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
