import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { LoadingService } from './../loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  loading: boolean = false;

  constructor(private loadingService: LoadingService) { }

  ngOnInit(): void {
    this.monitorLoading();
  }

  monitorLoading() {
    this.loadingService.loadingSubject.pipe(
      delay(0)
    ).subscribe((loading) => {
      this.loading = loading;
    });
  }
}
