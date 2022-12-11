import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() emitAddObj = new EventEmitter<Ingredient>()
  @Output() emitDeleteObj = new EventEmitter<Ingredient>()
  @Output() emitClearAll = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    console.log(this.nameInput)
    if (this.nameInput.nativeElement.value) {
      this.nameInputStr = this.nameInput.nativeElement.value;
    }
  }

  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  nameInputStr: string;
  amountInputStr: number;
  clearAll: boolean;
  ingidientObj: Ingredient;

  addFunc() {
    this.nameInputStr = this.nameInput.nativeElement.value;
    this.amountInputStr = this.amountInput.nativeElement.value;
    this.ingidientObj = {
      name: this.nameInputStr,
      amount: this.amountInputStr
    }
    console.log('ingidientObj', this.ingidientObj)
    this.emitAddObj.emit(this.ingidientObj)
  }

  deleteFunc() {
    this.nameInputStr = this.nameInput.nativeElement.value;
    this.amountInputStr = this.amountInput.nativeElement.value;
    this.ingidientObj = {
      name: this.nameInputStr,
      amount: this.amountInputStr
    }
    this.emitDeleteObj.emit(this.ingidientObj)
  }

  clearFunc() {
    this.clearAll = true;
    this.emitClearAll.emit(this.clearAll)
  }

}
