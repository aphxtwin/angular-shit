import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Case, CaseFormData } from '../../models/case.model';

@Component({
  selector: 'app-case-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './case-form.component.html',
  styleUrl: './case-form.component.css'
})
export class CaseFormComponent {
  caseForm: FormGroup;
  submittedCases: Case[] = [];

  categories = [
    'Legal',
    'Medical',
    'Technical Support',
    'Customer Service',
    'Other'
  ];

  constructor(private fb: FormBuilder) {
    this.caseForm = this.fb.group({
      client: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', Validators.required],
      priority:['medium', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      documents: [[]]
    });
  }

  onSubmit(): void {
    if (this.caseForm.valid) {
      const formData: CaseFormData = this.caseForm.value;
      const newCase: Case = {
        id: this.generateCaseId(),
        ...formData,
        createdAt: new Date()
      };

      this.submittedCases.push(newCase);
      console.log('Case created:', newCase);

      this.caseForm.reset();
    }
  }

  onFileSelect(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const fileNames = Array.from(input.files).map(file => file.name);
      this.caseForm.patchValue({ documents: fileNames });
    }
  }

  private generateCaseId(): string {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `CASE-${timestamp}-${random}`;
  }

  get client() {
    return this.caseForm.get('client');
  }

  get category() {
    return this.caseForm.get('category');
  }

  get description() {
    return this.caseForm.get('description');
  }
}
