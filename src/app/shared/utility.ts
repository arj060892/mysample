import { FormGroup } from '@angular/forms';
import { environment } from '../../environments/environment';

export class Utility {
   static getAPIUrl(operation: string): string {
      switch (operation) {
         case 'users':
            return environment.baseUrl + '/posts';
         case 'posts':
            return environment.baseUrl + '/comments';
      }
   }
   static onValidateForm(formGroup: FormGroup): boolean {
      Object.keys(formGroup.controls).map(controlName => {
         formGroup.get(controlName).markAsTouched({ onlySelf: true });
      });
      return false;
   }
}
