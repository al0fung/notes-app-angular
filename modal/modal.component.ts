import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input() modalId: string;
  @Output() closeClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleCloseClick(e) {
    this.closeClick.emit(e);
  }

  handleBackdropClick(e) {
    if(e.target === document.getElementById(this.modalId)) {
      this.handleCloseClick(e);
    }
  }
}
