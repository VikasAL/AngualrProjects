import { Component } from '@angular/core';
import { Appointment } from '../models/Appointment';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  appointments: Appointment[] = []
  newAppointmentTitle: String = ""
  newAppointmentDate: Date = new Date()

  ngOnInit(): void {
    let savedAppointments = localStorage.getItem("appointment")
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }


  addApointments() {
    if (this.newAppointmentTitle.trim().length && this.newAppointmentDate) {
      let newAppointment: Appointment = {
        id: Date.now(),
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate
      }
      this.appointments.push(newAppointment)
      localStorage.setItem("appointment", JSON.stringify(this.appointments))
      this.newAppointmentTitle = ""
      this.newAppointmentDate = new Date()
    } else {
      alert("Please enter the value!!...")
    }

  }

  removeApointments(index: number) {
    this.appointments.splice(index, 1)
    localStorage.setItem("appointment", JSON.stringify(this.appointments))
  }
}
