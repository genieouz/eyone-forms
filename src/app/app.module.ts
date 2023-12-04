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

@NgModule({
  declarations: [
    AppComponent,
    SocialReferenceFormComponent,
    TechnicalNoteFormComponent,
    InternalSupervisionFormComponent,
    TrainingThemeSheetFormComponent,
    SocialCareFormComponent,
    SocialCounterReferenceFormComponent
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
