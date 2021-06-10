import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatOption } from '@angular/material';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  searchUserForm: FormGroup;

  userTypeFilters = [
    {
      key: 1, value: 'Value 1',
    },
    {
      key: 2, value: 'Value 2',
    },
    {
      key: 3, value: 'Value 3',
    },
    {
      key: 4, value: 'Value 4',
    }
  ];
  @ViewChild('allSelected') private allSelected: MatOption;

  constructor(private fb: FormBuilder){}

  ngOnInit() {
    this.searchUserForm = this.fb.group({
      userType: new FormControl('')
    });
  }
tosslePerOne(all){ 
   if (this.allSelected.selected) {  
    this.allSelected.deselect();
    return false;
}
  if(this.searchUserForm.controls.userType.value.length==this.userTypeFilters.length)
    this.allSelected.select();

}
  toggleAllSelection() {
    if (this.allSelected.selected) {
      this.searchUserForm.controls.userType
        .patchValue([...this.userTypeFilters.map(item => item.key), 0]);
    } else {
      this.searchUserForm.controls.userType.patchValue([]);
    }
  }
}

/**
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */