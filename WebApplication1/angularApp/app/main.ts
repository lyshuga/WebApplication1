import 'zone.js';
import 'reflect-metadata';
import '../vendor';
import '../polyfills';
import './main.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
