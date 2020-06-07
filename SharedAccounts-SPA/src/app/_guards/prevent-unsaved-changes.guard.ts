import { Injectable } from "@angular/core";
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { CanDeactivate } from '@angular/router';

@Injectable()
export class PrevenUnsavedChanges implements CanDeactivate<MemberEditComponent> {
    canDeactivate(component: MemberEditComponent) {
        if (component.editForm.dirty) {
            return confirm('Are you sure want to continue? Any unsaved changes will be lost');
        }
        return true;
    }
}