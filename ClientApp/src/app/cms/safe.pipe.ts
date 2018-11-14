import { Pipe } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Pipe({name: 'safeHtml'})
export class SafePipe {
  constructor(private sanitizer:DomSanitizer){}

  transform(style) {
    return this.sanitizer.bypassSecurityTrustHtml(style);
    //return this.sanitizer.bypassSecurityTrustStyle(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}