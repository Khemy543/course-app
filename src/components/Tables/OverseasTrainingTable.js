import React from "react";
import { Table } from "reactstrap";

export default class CalendarTable extends React.Component {
  state = {
    calendarData: [
      {
        id: 1,
        name: "Accounting and Finance - GSR Calendar 2024",
        file: "Accounting and Finance - GSR Calendar 2024.pdf",
      },
      {
        id: 2,
        name: "Audit Compliance AND Governance",
        file: "Audit^J Compliance AND Governance.pdf",
      },
      {
        id: 3,
        name: "Banking Investment Insurance",
        file: "Banking^J Investment ^0 Insurance.pdf",
      },
      {
        id: 4,
        name: "Communication and Writing Skills",
        file: "Communication and Writing Skills.pdf",
      },
      {
        id: 5,
        name: "Construction Management Civil",
        file: "Construction Management ^0 Civil.pdf",
      },
      {
        id: 6,
        name: "Contract Management and Law",
        file: "Contract Management and Law.pdf",
      },
      {
        id: 7,
        name: "Customer Service",
        file: "Customer Service.pdf",
      },
      {
        id: 8,
        name: "Data Management Business Intel",
        file: "Data Management ^L0 Business Intel.pdf",
      },
      {
        id: 9,
        name: "Electrical Engineering",
        file: "Electrical Engineering.pdf",
      },
      {
        id: 10,
        name: "GSR Overseas Trg 2024 - Tax and Revenue",
        file: "GSR Overseas Trg 2024 - Tax and Revenue.pdf",
      },
      {
        id: 11,
        name: "HUMAN RESOURCE MGT",
        file: "HUMAN RESOURCE MGT.pdf",
      },
      {
        id: 12,
        name: "Health Safety Environment",
        file: "Health^J Safety ^0 Environment.pdf",
      },
      {
        id: 13,
        name: "Humanitarian Development",
        file: "Humanitarian Development.pdf",
      },
      {
        id: 14,
        name: "Instrumentation and Process Cntrl",
        file: "Instrumentation and Process Cntrl.pdf",
      },
      {
        id: 15,
        name: "Leadership and Management",
        file: "Leadership and Management.pdf",
      },
      {
        id: 16,
        name: "Learning and Development",
        file: "Learning and Development.pdf",
      },
      {
        id: 17,
        name: "Media And Telecom",
        file: "MEDIA AND TELECOM.pdf",
      },
      {
        id: 18,
        name: "Maintenance Engineering",
        file: "Maintenance Engineering.pdf",
      },
      {
        id: 19,
        name: "Mechanical Engineering",
        file: "Mechanical Engineering.pdf",
      },
      {
        id: 20,
        name: "National Security",
        file: "NATIONAL SECURITY.pdf",
      },
      {
        id: 21,
        name: "Office Adminstration Courses",
        file: "OFFICE ADMINISTRATION COURSES.pdf",
      },
      {
        id: 22,
        name: "Private Private Partnership Courses",
        file: "Private Private Partnership Courses.pdf",
      },
      {
        id: 23,
        name: "Project Management Courses",
        file: "Project Management Courses.pdf",
      },
      {
        id: 24,
        name: "Public Relations Courses",
        file: "Public Relations Courses - Copy.pdf",
      },
      {
        id: 25,
        name: "Public Relations Courses",
        file: "Public Relations Courses.pdf",
      },
      {
        id: 27,
        name: "Public Sector Management Courses",
        file: "Public Sector Management Courses.pdf",
      },
      {
        id: 28,
        name: "Quality Control Risk Management Courses",
        file: "Quality Control Risk Management Courses.pdf",
      },
      {
        id: 30,
        name: "Sales and Marketing Courses",
        file: "Sales and Marketing Courses.pdf",
      },
      {
        id: 29,
        name: "Sales and Marketing Courses - Copy",
        file: "Sales and Marketing Courses - Copy.pdf",
      },
      {
        id: 31,
        name: "Strategy and Srtategic Planning Courses",
        file: "Strategy and Srtategic Planning Courses - Copy.pdf",
      },
      {
        id: 32,
        name: "Strategy and Srtategic Planning Courses",
        file: "Strategy and Srtategic Planning Courses.pdf",
      },
      {
        id: 33,
        name: "Tax and Revenue Courses",
        file: "Tax and Revenue Courses  - Copy.pdf",
      },
      {
        id: 34,
        name: "Tax and Revenue Courses",
        file: "Tax and Revenue Courses.pdf",
      },
    ],
  };

  render() {
    return (
      <Table striped style={{ borderTop: "none", textAlign: "left" }}>
        <thead>
          <tr>
            <th style={{ fontSize: "16px" }}>#</th>
            <th style={{ fontSize: "16px" }}>DOCUMENT</th>
            <th style={{ fontSize: "16px", textAlign: "right" }}>DOWNLOAD</th>
          </tr>
        </thead>
        <tbody>
          {this.state.calendarData.map((value, index) => (
            <tr>
              <th>{index + 1}</th>
              <th>{value.name}</th>
              <td style={{ textAlign: "right" }}>
                <a
                  href={`https://core.mosesimmigration.com/oversees-training/${value.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-eye mr-4"
                    style={{ cursor: "pointer" }}
                    aria-hidden="true"
                  />
                </a>
                <a
                  href={`https://core.mosesimmigration.com/api/download/${value.file}/file`}
                  download
                >
                  <i
                    className="fa fa-download mr-3"
                    style={{ cursor: "pointer" }}
                    aria-hidden="true"
                  />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
