import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { noWhitespaceValidator } from '../../validators/whitespace.validator.ts';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm: FormGroup;
  isModalOpen = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, noWhitespaceValidator]]
    });
  }

  get name() {
    return this.contactForm.get('name');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get message() {
    return this.contactForm.get('message');
  }


  onSubmit() {
    this.contactForm.markAllAsTouched();
    this.contactForm.updateValueAndValidity();

    if (this.contactForm.valid) {
      console.log('送信内容:', this.contactForm.value);
      this.isModalOpen = true;
      this.contactForm.reset();
    } else {
      console.warn('バリデーションエラーがあります')
    }
  }

  closeModal() {
    this.isModalOpen = false;
    this.router.navigate(['/'])
  }
}
