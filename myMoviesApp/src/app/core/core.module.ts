import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { MoviesModule } from '../movies/movies.module';
import { MenuComponent } from './components/menu/menu.component';

//MAT-MODULES
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';


const MAT_MODULES = [
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatTabsModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatGridListModule,
  MatProgressBarModule,
  MatRippleModule,
  MatTableModule,
  MatSortModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatMenuModule,
  MatChipsModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatBadgeModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatRadioModule,
  ClipboardModule
];

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [
    CommonModule,
    DashboardModule,
    MoviesModule,
    MAT_MODULES
  ],
  exports:[
    MAT_MODULES
  ],
  bootstrap: [AppComponent]
})
export class CoreModule { }

