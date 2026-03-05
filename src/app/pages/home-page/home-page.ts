import { Component } from '@angular/core';
import {Button} from '../../components/atoms/button/button';
import {FeaturedCollection} from '../../components/featured-collection/featured-collection';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [
    Button,
    FeaturedCollection,
    RouterLink
  ],
  templateUrl: './home-page.html',
})
export class HomePage {

}
