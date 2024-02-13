import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ETicaretClient';
  constructor(private toastrService: CustomToastrService){
    toastrService.message("Deneme", "deneem2", {messageType: ToastrMessageType.Error, position: ToastrPosition.BottomCenter});
  }
}

