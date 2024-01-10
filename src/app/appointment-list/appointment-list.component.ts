import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css'],
})
export class AppointmentListComponent implements OnInit {
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  appointments: Appointment[] = [];

  ngOnInit(): void {
    const savedAppointments = localStorage.getItem('appointments');
    if (!savedAppointments) return;
    this.appointments = JSON.parse(savedAppointments);
  }

  addAppointment() {
    if (this.newAppointmentTitle.trim() === '' && this.newAppointmentDate)
      return;

    this.appointments.push({
      id: this.appointments.length + 1,
      title: this.newAppointmentTitle,
      date: this.newAppointmentDate,
    });
    this.newAppointmentTitle = '';
    this.newAppointmentDate = new Date();
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
  deleteAppointment(index: number) {
    this.appointments.splice(index, 1);
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
