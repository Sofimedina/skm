// app.component.ts
import { Component, OnInit } from '@angular/core';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loading: boolean = true;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    // Simulate a delay (e.g., API call) and hide loader when done
    setTimeout(() => {
      this.loadingService.hideLoader();
      this.loading = false; // Update the loading flag
    }, 2000);
  }
}
