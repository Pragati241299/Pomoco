import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
    exports: [
      MatIconModule,  MatFormFieldModule,
      MatSlideToggleModule,
      MatCardModule, 
      MatMenuModule,  MatDialogModule, 
      MatSidenavModule,
      MatExpansionModule
    
    ]
})

export class MaterialModules { }