import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';

/**
* Component `<cb-avatar>` to create a avatar
* @param image Url of avatar
* @param name Name of avatar
* @param size Avatar's size (xsmall / small / medium / large / xlarge)
*/
@Component({
  selector: 'cb-avatar',
  template: `
  <img class="avatar" src="{{image}}" alt="{{name}}" *ngIf="image">
  <span class="initials" *ngIf="!image">{{letters}}</span>
  <ng-content></ng-content>
  `,
  styleUrls: ['./cb-avatar.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    '[class.avatar--extra-small]': 'size ===  "xsmall"',
    '[class.avatar--small]': 'size ===  "small"',
    '[class.avatar--medium]': 'size ===  "medium"',
    '[class.avatar--large]': 'size ===  "large"',
    '[class.avatar--extra-large]': 'size ===  "xlarge"'
  }
})
export class CbAvatarComponent implements OnInit {
  @Input() image: string;
  @Input() name: string;
  @Input() size = 'large';

  nameSplit: Array<String>;
  letters: String;

  getInitials() {
    this.nameSplit = this.name.split(' ');
  }

  ngOnInit() {
    if (this.name) {
      this.nameSplit = this.name.split(' ');
      this.letters = this.nameSplit[0].charAt(0).toUpperCase() + this.nameSplit[1].charAt(0).toUpperCase();
    }
  }
}
