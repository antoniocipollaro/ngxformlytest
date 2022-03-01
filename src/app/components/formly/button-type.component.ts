import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'formly-field-button',
  template: `
    <div>
      <button [type]="to.type" [ngClass]="'btn btn-' + to.btnType" (click)="onClick($event)">
        {{ to.text }}
      </button>
    </div>
  `,
})
// tslint:disable-next-line:component-class-suffix
export class FormlyFieldButton extends FieldType {
  // tslint:disable-next-line:typedef
  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}
