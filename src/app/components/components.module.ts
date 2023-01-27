import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalToastComponent } from './toasts/global-toast/global-toast.component';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [GlobalToastComponent, NavbarComponent],
    exports: [GlobalToastComponent, NavbarComponent],
    imports: [NgbToastModule, CommonModule, AppRoutingModule],
})
export class ComponentsModule {}
