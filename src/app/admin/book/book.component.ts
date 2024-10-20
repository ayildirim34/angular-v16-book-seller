import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/models/book.model';
import { BookService } from 'src/app/services/book.service';

declare var $: any;

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent {
  errorMesage: string = '';

  @Input() book: Book = new Book();
  @Output() save = new EventEmitter<any>();

  constructor(private bookService: BookService) {}

  saveBook() {
    this.bookService.saveBook(this.book).subscribe({
      next: (data) => {
        this.save.emit(data);
        $('#bookModal').modal('hide');
      },
      error: (err) => {
        this.errorMesage = 'Unexpected error occured.';
        console.log(err);
      },
      complete: () => {},
    });
  }
  showBookModal() {
    $('#bookModal').modal('show');
  }
}
