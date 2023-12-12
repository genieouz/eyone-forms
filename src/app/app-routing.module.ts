import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SocialReferenceFormComponent } from './form1/social-reference-form/social-reference-form.component';
import { OperativeReportFormComponent } from './form10/operative-report-form/operative-report-form.component';
import { EngagementFormComponent } from './form11/engagement-form/engagement-form.component';
import { CancellationFormComponent } from './form12/cancellation-form/cancellation-form.component';
import { PaymentMoratoriumFormComponent } from './form13/payment-moratorium-form/payment-moratorium-form.component';
import { AccompanistCardFormComponent } from './form14/accompanist-card-form/accompanist-card-form.component';
import { ReferenceFormComponent } from './form15/reference-form/reference-form.component';
import { CounterReferenceFormComponent } from './form16/counter-reference-form/counter-reference-form.component';
import { TransferFormComponent } from './form17/transfer-form/transfer-form.component';
import { AnatomoPathologicalExamFormComponent } from './form18/anatomo-pathological-exam-form/anatomo-pathological-exam-form.component';
import { AnapathReportFormComponent } from './form19/anapath-report-form/anapath-report-form.component';
import { TechnicalNoteFormComponent } from './form2/technical-note-form/technical-note-form.component';
import { AnurectoscopyReportFormComponent } from './form20/anurectoscopy-report-form/anurectoscopy-report-form.component';
import { ColoscopyReportFormComponent } from './form23/coloscopy-report-form/coloscopy-report-form.component';
import { OesoGastroDuodenoscopyReportFormComponent } from './form24/oeso-gastro-duodenoscopy-report-form/oeso-gastro-duodenoscopy-report-form.component';
import { RectosigmoidoscopyReportFormComponent } from './form25/rectosigmoidoscopy-report-form/rectosigmoidoscopy-report-form.component';
import { CesareanReportFormComponent } from './form26/cesarean-report-form/cesarean-report-form.component';
import { VpaRequestFormComponent } from './form27/vpa-request-form/vpa-request-form.component';
import { VpaReportFormComponent } from './form28/vpa-report-form/vpa-report-form.component';
import { InternalSupervisionFormComponent } from './form3/internal-supervision-form/internal-supervision-form.component';
import { TrainingThemeSheetFormComponent } from './form4/training-theme-sheet-form/training-theme-sheet-form.component';
import { SocialCareFormComponent } from './form5/social-care-form/social-care-form.component';
import { SocialReference2FormComponent } from './form6/social-reference2-form/social-reference2-form.component';
import { SocialCounterReferenceFormComponent } from './form7/social-counter-reference-form/social-counter-reference-form.component';
import { SocialInquiryFormComponent } from './form8/social-inquiry-form/social-inquiry-form.component';
import { MedicalLegalReportFormComponent } from './form9/medical-legal-report-form/medical-legal-report-form.component';

const routes: Routes = [
  {
    path: "auth",
    component: AuthComponent
  },
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
  },
  {
    path: "counter-reference",
    component: CounterReferenceFormComponent
  },
  {
    path: "transfer-form",
    component: TransferFormComponent
  },
  {
    path: "anatomo-pathological-exam",
    component: AnatomoPathologicalExamFormComponent
  },
  {
    path: "anapath-report",
    component: AnapathReportFormComponent
  },
  {
    path: "anurectoscopy-report",
    component: AnurectoscopyReportFormComponent
  },
  {
    path: "coloscopy-report",
    component: ColoscopyReportFormComponent
  },
  {
    path: "oeso-gastro-duodenoscopy-report",
    component: OesoGastroDuodenoscopyReportFormComponent
  },
  {
    path: "rectosigmoidoscopy-report",
    component: RectosigmoidoscopyReportFormComponent
  },
  {
    path: "cesarean-report",
    component: CesareanReportFormComponent
  },
  {
    path: "vpa-request",
    component: VpaRequestFormComponent
  },
  {
    path: "vpa-report",
    component: VpaReportFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
