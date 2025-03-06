import { Component } from '@angular/core';
import { AppHeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { BacklightComponent } from "./backlight/backlight.component";
import { LavaLampComponent } from "./lavalamp/lava-lamp.component";
import { IconUpComponent } from "./icons/up/icon-up.component";
import { CopyrightComponent } from "./copyright/copyright.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [AppHeaderComponent, MainComponent, BacklightComponent, LavaLampComponent, IconUpComponent, CopyrightComponent],
})
export class AppComponent {}
