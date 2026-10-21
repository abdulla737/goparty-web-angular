import { bootstrapApplication, type BootstrapContext } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';

// Angular 19.2.16+ requires the server-provided context to be passed through.
const bootstrap = (context: BootstrapContext) => bootstrapApplication(AppComponent, config, context);
export default bootstrap;
