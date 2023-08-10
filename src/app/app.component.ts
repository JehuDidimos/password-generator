import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  protected useLetters:boolean;
  protected useNumbers:boolean;
  protected useSymbols:boolean;
  protected title:string;
  protected newPassword:string; 
  protected passwordLength: number


  constructor(){
    this.title = "password-generator";
    this.newPassword = '';
    this.useLetters = false;
    this.useNumbers = false;
    this.useSymbols = false;
    this.passwordLength = 0;
  }

  changeLetterUse(){
    this.useLetters = !this.useLetters;
  }

  changeNumberUse(){
    this.useNumbers = !this.useNumbers;
  }

  changeSymbolUse(){
    this.useSymbols = !this.useSymbols;
  }

  setPasswordLength(length: any){
    const parsedvalue = parseInt(length.value);
    if(!isNaN(parsedvalue)){
      this.passwordLength = parsedvalue;
    }
    console.log(this.passwordLength);
  }

  clicked(){
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%*'

    var validChars = '';

    if(this.useLetters){
      validChars += letters;
    }
    if(this.useNumbers){
      validChars += numbers;
    }
    if(this.useSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i = 0; i < this.passwordLength; i++){
      var index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.newPassword = generatedPassword;
  }
}
