import { Component } from '@angular/core';
import {EnfasisTag} from "../../shared/components/enfasis-tag/enfasis-tag";

@Component({
  selector: 'app-blog',
    imports: [
        EnfasisTag
    ],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {

}
