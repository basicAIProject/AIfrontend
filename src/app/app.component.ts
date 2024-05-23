import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ai-project';

  public currenStatus:string = "Select your difficulty for Tic-Tac-Toe";
  public gameStarted:boolean = false;
  public currentDifficulty = 1; 

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  public setDiffculity(buttonIndex:number) {
    this.currentDifficulty = buttonIndex;
  }

  public clickedSqaure(index: number): void {
    console.log(index);
    
  }

}
