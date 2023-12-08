import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FormService } from 'src/app/form.service';

@Component({
  selector: 'app-social-inquiry-form',
  templateUrl: './social-inquiry-form.component.html',
  styleUrls: ['./social-inquiry-form.component.scss']
})
export class SocialInquiryFormComponent {
  socialInquiryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.socialInquiryForm = this.fb.group({
      // Section IDENTIFICATION
      entityStructure: ['', Validators.required],
      socialService: ['', Validators.required],
      uniqueIdentifier: ['', Validators.required],
      patientFullName: ['', Validators.required],
      patientFileNumber: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      placeOfBirth: ['', Validators.required],
      registrationDate: ['', Validators.required],
      registrationTime: ['', Validators.required],
      service: ['', Validators.required],
      request: ['', Validators.required],
      arrivalDate: ['', Validators.required],
      nationalIdOrPassport: ['', Validators.required],
      currentAddress: ['', Validators.required],
      permanentAddress: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      educationLevel: ['', Validators.required],
      profession: ['', Validators.required],
      employer: ['', Validators.required],
      activityStatus: [''], // boolean or string if detailed
      activityDetail: [''],
      professionalAddress: ['', Validators.required],
      nationality: ['', Validators.required],
      ethnicity: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      specificSituation: [''], // like concubinage, abandonment, etc.
      livingArrangement: [''], // like monogamy, polygamy, etc.

      // Section ENFANTS À CHARGE
      childrenInCharge: this.fb.array([]),

      // Section CARACTÉRISTIQUES DE L'HABITAT
      residentialArea: [''], // like quartier résidentiel, banlieue, etc.
      typeOfHousing: [''], // like individuel, collectif, etc.
      housingStatus: [''], // like propriétaire, locataire, etc.
      socialEnvironmentInstitutions: [''],
      socialEnvironmentMovements: [''],

      // Section SITUATION SOCIO-ÉCONOMIQUE
      householdFurniture: [''],
      exploitationMaterial: [''],
      regularIncome: [''],
      irregularIncome: [''],
      financialContributions: [''],
      financialCommitments: [''],
      financialResources: [''],

      // Section MOTIF DE LA DEMANDE
      requestReason: [''],

      // Section ANALYSE DU CAS
      caseStrengths: [''],
      caseConstraints: [''],

      // Section PROPOSITIONS DE SOLUTIONS ET PERSPECTIVES
      aidRequestCost: [''],
      partnerIdentification: [''],
      actionsToBeTaken: [''],

      // Section PLAN DE SUIVI DE L'INTERVENTION
      interventionFollowUpPlan: ['']
      // Other fields can be added here.
    });
  }

  get childrenArray(): FormArray {
    return this.socialInquiryForm.get('childrenInCharge') as FormArray;
  }

  addChildInCharge(): void {
    const childFormGroup = this.fb.group({
      childFullName: ['', Validators.required],
      childAge: ['', Validators.required],
      childActivity: [''],
      childObservations: ['']
    });
    this.childrenArray.push(childFormGroup);
  }

  onSubmit(): void {
    console.log(this.socialInquiryForm.value);
    if (this.socialInquiryForm.valid) {
      // Submit the form data to the server or handle it as needed
      this.formService.submitForm(this.socialInquiryForm.value, "")

    }
  }
}
