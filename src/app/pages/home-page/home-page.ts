import { Component } from '@angular/core';
import {Button} from '../../components/atoms/button/button';
import {FeaturedCollection} from '../../components/featured-collection/featured-collection';

@Component({
  selector: 'app-home-page',
  imports: [
    Button,
    FeaturedCollection
  ],
  templateUrl: './home-page.html',
})
export class HomePage {

}
