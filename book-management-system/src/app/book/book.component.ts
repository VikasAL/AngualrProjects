import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Book[] = []
  newBookTitle: string = ""
  newBookAuthor: string = ""

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books")
    this.books = savedBooks ? JSON.parse(savedBooks) : []
  }

  addBook() {

    if (this.newBookTitle.trim().length && this.newBookAuthor.trim().length) {
      let book: Book = {
        id: Date.now(),
        title: this.newBookTitle,
        author: this.newBookAuthor
      }
      this.books.push(book)
      localStorage.setItem("books", JSON.stringify(this.books))
      this.newBookAuthor=""
      this.newBookTitle=""

    } else {
      alert("Please Enter the details!!..")
    }
  }

  removeBook(index: number) {
    this.books.splice(index, 1)
  }

}
