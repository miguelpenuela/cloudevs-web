import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'category-tag',
  imports: [],
  templateUrl: './category-tag.html',
  styleUrl: './category-tag.scss',
})
export class CategoryTag {

  @Input() category: string = '';
  @Output() onSelectCategory: EventEmitter<any> = new EventEmitter();

  handleSelection(): void {
    this.onSelectCategory.emit(this.category);
  }

}
