import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // Importa la función isPlatformBrowser
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { // Verifica si estamos en un navegador
      // Importa y ejecuta el código de Materialize solo si estamos en un navegador
      import('materialize-css').then((M) => {
        // Inicializa el sidenav
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
    }
  }
}
