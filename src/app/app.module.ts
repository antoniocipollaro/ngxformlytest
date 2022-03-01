import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormlyFieldButton } from './components/formly/button-type.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DynamicFormComponent,
    FormlyFieldButton
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({ extras: { lazyRender: true }, types: [{
      name: 'button',
      component: FormlyFieldButton,
      wrappers: ['form-field'],
      defaultOptions: {
        templateOptions: {
          btnType: 'default',
          type: 'button',
        },
    }
   }]}),
    NgbModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [DynamicFormComponent, ]
})
export class AppModule { }
