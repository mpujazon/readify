import { Component } from '@angular/core';
import { Button } from "../../components/atoms/button/button";
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [Button, RouterLink],
  templateUrl: './not-found.html'
})

export class NotFound {
}
