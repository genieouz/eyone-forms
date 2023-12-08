import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialReferenceFormComponent } from './form1/social-reference-form/social-reference-form.component';
import { TechnicalNoteFormComponent } from './form2/technical-note-form/technical-note-form.component';
import { InternalSupervisionFormComponent } from './form3/internal-supervision-form/internal-supervision-form.component';
import { TrainingThemeSheetFormComponent } from './form4/training-theme-sheet-form/training-theme-sheet-form.component';
import { SocialCareFormComponent } from './form5/social-care-form/social-care-form.component';
import { SocialCounterReferenceFormComponent } from './form7/social-counter-reference-form/social-counter-reference-form.component';
import { SocialInquiryFormComponent } from './form8/social-inquiry-form/social-inquiry-form.component';
import { MedicalLegalReportFormComponent } from './form9/medical-legal-report-form/medical-legal-report-form.component';
import { SocialReference2FormComponent } from './form6/social-reference2-form/social-reference2-form.component';
import { OperativeReportFormComponent } from './form10/operative-report-form/operative-report-form.component';
import { EngagementFormComponent } from './form11/engagement-form/engagement-form.component';
import { CancellationFormComponent } from './form12/cancellation-form/cancellation-form.component';
import { PaymentMoratoriumFormComponent } from './form13/payment-moratorium-form/payment-moratorium-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SocialReferenceFormComponent,
    TechnicalNoteFormComponent,
    InternalSupervisionFormComponent,
    TrainingThemeSheetFormComponent,
    SocialCareFormComponent,
    SocialCounterReferenceFormComponent,
    SocialInquiryFormComponent,
    MedicalLegalReportFormComponent,
    SocialReference2FormComponent,
    OperativeReportFormComponent,
    EngagementFormComponent,
    CancellationFormComponent,
    PaymentMoratoriumFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
