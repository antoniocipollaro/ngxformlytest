import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {

  constructor(private configService: ConfigService) {}
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email address',
        placeholder: 'Enter email',
        required: true,
      }
    }
  ];
  ngOnInit(): void {
    this.configService.getData().subscribe(
     data => {
        this.fields = data;
        console.log(JSON.stringify(data));
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(model: any) {
    console.log(model);
    this.configService.setData(model).subscribe();
  }
}

