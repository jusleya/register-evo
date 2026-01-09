import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/pages/register/app.config';
import { App } from './app/pages/register/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
