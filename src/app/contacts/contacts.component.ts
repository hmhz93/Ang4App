import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map"
import {ContactsService} from "../../services/contacts.service";
import {Router} from "@angular/router";
import {Contact} from "../../model/model.contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  motCle: string = "";
  currentPage: number = 0;
  size: number = 3;

  pages: Array<number>;

  pageContacts: any;

  constructor(public http: Http, public contactsService: ContactsService, public router: Router) {
  }

  ngOnInit() {


  }

  doSearch() {
    this.contactsService.getContacts(this.motCle, this.currentPage, this.size)
      .subscribe(data => {
        this.pageContacts = data;
        this.pages = new Array(data.totalPages)
      }, err => {
        console.log(err);
      })
  }

  chercher() {

    this.doSearch();
  }

  goToPage(i: number) {
    this.currentPage = i;
    this.doSearch();

  }

  onEditContact(id: number) {
    this.router.navigate(['editContact', id]);
  }

  onDeleteContact(c: Contact) {
    let confirm = window.confirm("Are you sure ?");
    if (confirm == true) {
      this.contactsService.deleteContact(c.id)
        .subscribe(data => {
          this.pageContacts.content.splice(
            this.pageContacts.content.indexOf(c), 1
          );
        }, err => {
          console.log(err)
        })
    }

  }

}
