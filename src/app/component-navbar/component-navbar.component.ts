import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'component-navbar',
  templateUrl: './component-navbar.component.html',
  styleUrls: ['./component-navbar.component.scss']
})
export class ComponentNavbarComponent implements OnInit {

  activePage: string = "";

  constructor(
    private _ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this._ActivatedRoute.paramMap.subscribe(param => {

      let url: Observable<string> = this._ActivatedRoute.url.pipe(map(segment => segment.join('')));
      this._ActivatedRoute.url.subscribe(segments => {
        if (segments && segments[0] && segments[0].path) {
          this.activePage = segments[0].path;
        }
      });

    });
  }

}
