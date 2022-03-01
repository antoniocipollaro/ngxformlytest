import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig} from '@ngx-formly/core';
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
        this.fields = this.mapFields(data);
        console.log(JSON.stringify(data));
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(model: any) {
    console.log(model);
    this.configService.setData(model).subscribe();
  }

  clickFunction(): any{
    alert('ciao');
  }


  // tslint:disable-next-line:typedef
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map(f => {
      // Bind an observable to `color` field.
      if (f.templateOptions.onClick === 'alert') {
        // f.templateOptions.options = this.userService.getColors();
        // Si può accedere ad un campo contenente il messaggio o manipolare il campo field
        f.templateOptions.onClick = () => this.clickFunction();
      } else if (f.type ===  'select') {
        f.templateOptions.options = [{label : 'Campania', value: 'campania'},
                                    {label : 'Calabria', value: 'calabria'},
                                    {label : 'Sicilia', value: 'sicilia'}];
      }

      return f;
    });
  }
}



