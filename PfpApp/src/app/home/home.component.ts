import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompoundCalcParam } from '../CompoundCalcParam';
//import { NgMultiSelectDropDownModule, IDropdownSettings } from 'ng-multiselect-dropdown'; /Code to use multi select dropdown

@Component({
  selector: 'app-home',
  imports: [FormsModule], // NgMultiSelectDropDownModule, Code to use multi select dropdown
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{

  compoundCalcParams: CompoundCalcParam = {} as CompoundCalcParam;

  totalValueOfInvestment: number | undefined;

  totalInterestEarned: number | undefined;

  compoundFrequency: number = 1;

  constructor()
  {
    this.totalValueOfInvestment = 0;
    this.totalInterestEarned = 0;
  }

  
/* Code to use multi select dropdown
  dropdownList = [
    { frequencyId: 1, frequencyType: 'Annual' },
    { frequencyId: 12, frequencyType: 'Monthly' }
  ];

  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  ngOnInit() {
    this.dropdownList = [
      { frequencyId: 1, frequencyType: 'Annual' },
      { frequencyId: 12, frequencyType: 'Monthly' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'frequencyId',
      textField: 'frequencyType',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
    localStorage. setItem("frequency", item.frequencyId);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  */

  onSelect(event: Event){
    this.compoundFrequency = Number((event.target as HTMLSelectElement).value)
    console.log(this.compoundFrequency);
  }

  CalCulateCompoundInterest() {
    console.log(this.compoundFrequency);
    //this.compoundFrequency =  Number(localStorage.getItem("frequency"));
    //this.grandTotal = this.compoundCalcParams.initialInvestment * (1 + (this.compoundCalcParams.interestRate / 100) * this.compoundCalcParams.yearsToGrow);
    this.totalValueOfInvestment = this.compoundCalcParams.initialInvestment * 
                          Math.pow((1 + (this.compoundCalcParams.interestRate/(100*this.compoundFrequency))), this.compoundFrequency * this.compoundCalcParams.yearsToGrow);

    this.totalInterestEarned = this.totalValueOfInvestment - this.compoundCalcParams.initialInvestment;
  }
}
