import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormService } from 'src/app/form.service';
import { SocialCareService } from '../social-care.service';

@Component({
  selector: 'app-social-care-form',
  templateUrl: './social-care-form.component.html',
  styleUrls: ['./social-care-form.component.scss']
})
export class SocialCareFormComponent {
  form: FormGroup;
  services: any[] = [{ name: "Option 1", id: 1 }];
  natureOfServices: any[] = [{ name: "Option 1", id: 1 }];

  constructor(
    private socialCareService: SocialCareService,
    private formService: FormService
  ) {
    this.form = new FormGroup({
      niup: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      birthDate: new FormControl('', Validators.required),
      addressPhone: new FormControl('', Validators.required),
      requestingService: new FormControl('Option 1', Validators.required),
      natureOfService: new FormControl('Option 1', Validators.required),
      actualCost: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      exemptedAmount: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      payerIdentification: new FormControl('', Validators.required),
    });
  }


  ngOnInit(): void {
    this.socialCareService.getServices().subscribe(data => {
      // this.services = data;
    });

    this.socialCareService.getNatureOfServices().subscribe(data => {
      // this.natureOfServices = data;
    });
  }

  onSearchPatient(): void {
    const niup = this.form.get('niup')?.value;
    this.socialCareService.findPatientByNiup(niup).subscribe(patient => {
      // Logique pour remplir le formulaire avec les données du patient
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.formService.submitForm(this.form.value, "").subscribe(response => {
        // Handle the response here
      });
    }
  }
}
