import {Component, Input} from '@angular/core';

@Component({
  selector: 'enfasis-tag',
  imports: [],
  templateUrl: './enfasis-tag.html',
  styleUrl: './enfasis-tag.scss',
})
export class EnfasisTag {
  @Input() tagIcon: string = '';
  @Input() tagLabel: string = '';
}
