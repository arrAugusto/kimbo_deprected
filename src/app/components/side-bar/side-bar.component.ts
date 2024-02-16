import { Component, OnInit, PLATFORM_ID, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { isPlatformBrowser } from '@angular/common'; 

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  items = ['Area operativa', 'Area bodega', 'Area saldos', 'Admón. Kimbo'];
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) { 
      import('materialize-css').then((M) => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });
    }
  }
}

@NgModule({
  declarations: [SideBarComponent], // Declare the SideBarComponent
  imports: [CommonModule], // Import CommonModule
  exports: [SideBarComponent] // Export the SideBarComponent if needed
})
export class SideBarModule {}
