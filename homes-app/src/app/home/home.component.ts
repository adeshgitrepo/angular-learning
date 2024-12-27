import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../HousingLocation';
import { HousingService } from '../housing.service';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import '@angular/localize/init' 

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent, KENDO_GRID],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    <section>
    <section class="gridResults">
      <kendo-grid [data]="filteredLocationList">
        <kendo-grid-column field="id" title="ID"> </kendo-grid-column>
        <kendo-grid-column field="name" title="Name"> </kendo-grid-column>        
        <kendo-grid-column field="city" title="city"> </kendo-grid-column>
        <kendo-grid-column field="state" title="state"> </kendo-grid-column>
        <kendo-grid-column title="photo">
          <ng-template kendoGridCellTemplate let-dataItem>
            <img [src]="dataItem.photo" alt="Image" class="housingLocationPhoto" />
          </ng-template>
        </kendo-grid-column>      
      </kendo-grid>
    </section>
    <section class="results">
      <app-housing-location *ngFor="let housingLocation 
      of filteredLocationList" [housingLocation]
      ="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  housingLocationList: HousingLocation [] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation [] = [];
  
  constructor(){
    this.housingService.getAllHoustingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
      if(!text) this.filteredLocationList = this.housingLocationList;

      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      )
    }
}
