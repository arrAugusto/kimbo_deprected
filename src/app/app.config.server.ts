import { ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';

// Configuración del servidor
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};

export const config = serverConfig;
