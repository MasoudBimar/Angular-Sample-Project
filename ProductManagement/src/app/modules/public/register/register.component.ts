import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get frm() { return this.registerForm.controls; }

   onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.authService.register({ 
                                  userName: this.frm.userName.value,
                                  firstName: this.frm.userName.value,
                                  lastName: this.frm.userName.value,
                                  password: this.frm.password.value
                            })
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/main/dashboard']);
        },
        error => {
          this.error = error;
          console.warn(this.error);
          this.loading = false;
        });
  }
}
