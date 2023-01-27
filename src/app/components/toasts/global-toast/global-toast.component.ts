import { Component } from '@angular/core';
import { GlobalToastService } from 'src/app/services/global-toast.service';

@Component({
  selector: 'app-global-toast',
  templateUrl: './global-toast.component.html',
  styleUrls: ['./global-toast.component.scss']
})
export class GlobalToastComponent {
    constructor(public globalToastService: GlobalToastService) {}
}
