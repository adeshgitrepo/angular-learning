import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { compoundCalcParam } from '../model/compoundCalcParam';

@Component({
  selector: 'app-compoundinterestcalculator',
  imports: [FormsModule],
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  compoundCalcParams: compoundCalcParam = {} as compoundCalcParam;

  totalValueOfInvestment: number | undefined;

  totalInterestEarned: number | undefined;

  compoundFrequency: number = 1;

  constructor()
  {
    this.totalValueOfInvestment = 0;
    this.totalInterestEarned = 0;
  }

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
