import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class  CommonService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  checkMobileScreenBrowser() {
    // Below code for navigate to Webview
    if (
      /iPhone|iPod|Android|BlackBerry|Windows Phone/i.test(navigator.userAgent)
    ) {
      // this.document.body.classList.add("ios-detect");
      return true;
    } else {
      return false;
    }
  }

}
