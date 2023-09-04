import { Component, HostListener } from '@angular/core';
import * as math from 'mathjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  currentInput: string = '';
  result: string = '';

  dot() {
    const operands = this.currentInput.split(/[+\-*/]/);
    const lastOperand = operands[operands.length - 1];
    if (!lastOperand.includes('.')) {
      this.currentInput += '.';
    }
  }
  back() {
    this.currentInput = this.currentInput.slice(0, -1);
  }

  equal() {
    try {
      const rawResult = math.evaluate(this.currentInput);
      if (typeof rawResult === 'number') {
        this.result = rawResult.toFixed(4);
        this.result = this.removeTrailingZeros(this.result);
      } else {
        this.result = rawResult;
      }
    } catch (error) {
      this.result = 'Error';
    }
  }
  operator(operator: string) {
    this.currentInput += ' ' + operator + ' ';
  }
  num(value: string) {
    if (
      (value === '00' && this.currentInput.endsWith('0')) ||
      (value === '00' && this.currentInput === '')
    ) {
      this.currentInput += '0';
    } else {
      this.currentInput += value;
    }
  }
  clear() {
    this.currentInput = '';
    this.result = '';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;

    const operands = this.currentInput.split(/[+\-*/]/);

    const lastOperand = operands[operands.length - 1];

    if (this.isNumeric(key)) {
      if (key === '.' && lastOperand.includes('.')) {
        return;
      }
      this.num(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      this.operator(key);
    } else if (key === 'Enter' || key === '=') {
      this.equal();
    } else if (key === 'Escape' || key === 'c' || key === 'C') {
      this.clear();
    } else if (key === 'Backspace') {
      this.back();
    } else if (key === '.') {
      if (!lastOperand.includes('.')) {
        this.dot();
      }
    }
  }

  private isNumeric(str: string): boolean {
    return /^\d+$/.test(str) || str === '.';
  }

  removeTrailingZeros(num: string): string {
    const strNum = num.toString();
    const stripped = strNum.replace(/(\.[0-9]*[1-9])0*|(\.0*)$/, '$1');
    return stripped;
  }
  title = 'calcly';
}
