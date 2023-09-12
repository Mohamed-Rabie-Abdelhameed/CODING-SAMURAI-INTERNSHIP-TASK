import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  constructor(private mail: EmailService) {}
  @ViewChild('contactForm')
  contactForm!: NgForm;
  snack: string = '';
  onSubmit(data: { email: string; subject: string; body: string }) {
    console.log(data);

    this.mail.sendEmail(data).subscribe(
      (response: any) => {
        console.log(response);
        this.contactForm.resetForm();
        this.snack = 'Message sent successfully 👌';
        this.displaySnack();
      },
      (error: any) => {
        console.log(error);
        this.contactForm.resetForm();
        this.snack = 'Something went wrong 👎';
        this.displaySnack();
      }
    );
  }

  displaySnack() {
    const toast = document.getElementById('toast');
    console.log(toast?.classList);
    toast!.classList.remove('hidden');
    toast!.classList.add('block');
    setTimeout(() => {
      toast!.classList.remove('block');
      toast!.classList.add('hidden');
    }, 3000);
  }
}
