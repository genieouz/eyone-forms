import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialReferenceFormComponent } from './form1/social-reference-form/social-reference-form.component';
import { OperativeReportFormComponent } from './form10/operative-report-form/operative-report-form.component';
import { EngagementFormComponent } from './form11/engagement-form/engagement-form.component';
import { CancellationFormComponent } from './form12/cancellation-form/cancellation-form.component';
import { PaymentMoratoriumFormComponent } from './form13/payment-moratorium-form/payment-moratorium-form.component';
import { AccompanistCardFormComponent } from './form14/accompanist-card-form/accompanist-card-form.component';
import { ReferenceFormComponent } from './form15/reference-form/reference-form.component';
import { TechnicalNoteFormComponent } from './form2/technical-note-form/technical-note-form.component';
import { InternalSupervisionFormComponent } from './form3/internal-supervision-form/internal-supervision-form.component';
import { TrainingThemeSheetFormComponent } from './form4/training-theme-sheet-form/training-theme-sheet-form.component';
import { SocialCareFormComponent } from './form5/social-care-form/social-care-form.component';
import { SocialReference2FormComponent } from './form6/social-reference2-form/social-reference2-form.component';
import { SocialCounterReferenceFormComponent } from './form7/social-counter-reference-form/social-counter-reference-form.component';
import { SocialInquiryFormComponent } from './form8/social-inquiry-form/social-inquiry-form.component';
import { MedicalLegalReportFormComponent } from './form9/medical-legal-report-form/medical-legal-report-form.component';

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
  },
  {
    path: "social-reference2",
    component: SocialReference2FormComponent
  },
  {
    path: "social-counter-reference",
    component: SocialCounterReferenceFormComponent
  },
  {
    path: "social-inquiry",
    component: SocialInquiryFormComponent
  },
  {
    path: "medical-legal-report",
    component: MedicalLegalReportFormComponent
  },
  {
    path: "operative-report",
    component: OperativeReportFormComponent
  },
  {
    path: "engagement",
    component: EngagementFormComponent
  },
  {
    path: "cancellation",
    component: CancellationFormComponent
  },
  {
    path: "payment-moratorium",
    component: PaymentMoratoriumFormComponent
  },
  {
    path: "accompanist-card",
    component: AccompanistCardFormComponent
  },
  {
    path: "reference",
    component: ReferenceFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
