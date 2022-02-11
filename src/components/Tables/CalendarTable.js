import React from 'react';
import { Table } from 'reactstrap';

export default class CalendarTable extends React.Component {

  state = {
    calendarData: [
      {
        id:1,
        topic: 'The Success-Prone Manager 1.0',
        duration: '2 Days',
        date: '23-24 Feb',
        rate: '1350'
      },
      {
        id:2,
        topic: 'The Turbulence-Proof Leader 1.0',
        duration: '2 Days',
        date: '9-10 Mar',
        rate: '1350'
      },
      {
        id:3,
        topic: 'Train the Trainer Course for Training Facilitators',
        duration: '2 Days',
        date: '23-24 Mar',
        rate: '1350'
      },
      {
        id:4,
        topic: 'Developing Operations Manual for your Business',
        duration: '2 Days',
        date: '6-7 Apr',
        rate: '1350'
      },
      {
        id:5,
        topic: 'Attitudes for Business Success',
        duration: '2 Days',
        date: '20-21 Apr',
        rate: '1350'
      },
      {
        id:6,
        topic: 'Mastering Supervision',
        duration: '2 Days',
        date: '11-12 May',
        rate: '1350'
      },
      {
        id:7,
        topic: 'Managing Performance For Results',
        duration: '2 Days',
        date: '25-26 May',
        rate: '1350'
      },
      {
        id:8,
        topic: 'Personal Development for High Performance',
        duration: '2 Days',
        date: '8-9 Jun',
        rate: '1350'
      },
      {
        id:9,
        topic: 'Essential Excel Skills For Finance Professionals',
        duration: '2 Days',
        date: '22-23 Jun',
        rate: '1350'
      },
      {
        id:10,
        topic: 'Maximising Value for the Internal Audit Function',
        duration: '2 Days',
        date: '13-14 Jul',
        rate: '1350'
      },
      {
        id:11,
        topic: 'Essential Leadership Skills for Supervisors',
        duration: '2 Days',
        date: '27-28 Jul',
        rate: '1350'
      },
      {
        id:12,
        topic: 'The Success-Prone Manager 2.0',
        duration: '2 Days',
        date: '10-11 Aug',
        rate: '1350'
      },
      {
        id:13,
        topic: 'The Turbulence-Proof Leader 2.0',
        duration: '2 Days',
        date: '24-25 Aug',
        rate: '1350'
      },
      {
        id:14,
        topic: 'Peak Performance People Management Strategy',
        duration: '2 Days',
        date: '7-8 Sept',
        rate: '1350'
      },
      {
        id:15,
        topic: 'Customer Service Skills for Public Sector Organisations',
        duration: '2 Days',
        date: '28-29 Sept',
        rate: '1350'
      },
      {
        id:16,
        topic: 'Attitudes for Business Success',
        duration: '2 Days',
        date: '12-13 Oct',
        rate: '1350'
      },
      {
        id:17,
        topic: 'Training Needs Assessment',
        duration: '2 Days',
        date: '26-27 Oct',
        rate: '1350'
      },
      {
        id:18,
        topic: 'Essential People Skills for Supervisor',
        duration: '2 Days',
        date: '9-19 Nov',
        rate: '1350'
      },
      {
        id:19,
        topic: 'Leadership Skills for Senior Executives',
        duration: '2 Days',
        date: '23-24 Nov',
        rate: '1350'
      },
      {
        id:20,
        topic: 'The Success-Prone Manager 3.0',
        duration: '2 Days',
        date: '7-8 Dec',
        rate: '1350'
      },
      {
        id:21,
        topic: 'The Turbulence-Proof Leader 3.0',
        duration: '2 Days',
        date: '14-15 Dec',
        rate: '1350'
      }
    ]
  }

  render() {
    return (
      <Table striped style={{borderTop:'none', textAlign:"left"}}>
        <thead>
          <tr>
            <th style={{fontSize:"16px"}}>TRAINING TOPIC</th>
            <th style={{fontSize:"16px"}}>DURATION</th>
            <th style={{fontSize:"16px"}}>DATES</th>
            <th style={{fontSize:"16px"}}>RATE (GHS)</th>
          </tr>
        </thead>
        <tbody>
          {this.state.calendarData.map((value) => (
          <tr>
            <th>{value.topic}</th>
            <td>{value.duration}</td>
            <td>{value.date}</td>
            <td>{value.rate}</td>
          </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}