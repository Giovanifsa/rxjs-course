import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { concat, fromEvent, interval, noop, Observable, of, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { createHTTPObservable } from '../common/util';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const source1$ = of(1, 2, 3);

    const source2$ = of(4, 5, 6);
    
    const source3$ = of(7, 8, 9);

    const concatenated$ = concat(source1$, source2$, source3$);

    concatenated$.subscribe(val => console.log(val));
  }
}


