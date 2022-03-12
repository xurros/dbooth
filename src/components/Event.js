import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
// import "bootstrap/dist/css/bootstrap.min.css";



class Event extends Component {
  state = {
    event: {},
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state

    return (
      <Container>
        <Row>
          <Col>

            <Card className="event" border="secondary" style={{ width: "60rem" }}>
              <Card.Body>
                <div className="summary">
                  <div>
                    <Card.Title>
                      {event.summary}
                    </Card.Title>

                    <p className="startDate">
                      {event.start.dateTime}{" "}
                      <span className="timeZone">({event.start.timeZone})</span>
                    </p>

                    <p className="location">
                      @ {event.summary}{" "}:: {" "}
                      <span>{event.location}</span>
                    </p>
                  </div>

                  <button
                    id="eventButton"
                    className={`event-button ${collapsed ? "show" : "hide"}-details`}
                    onClick={this.handleClick}
                  >
                    {collapsed ? "Show Details" : "Hide Details"}
                  </button>

                  <div className="event-footer">

                    {!collapsed && (
                      <div
                        className={`more-details ${this.state.collapsed ? "hide" : "show"
                          }`}
                      >

                        <br />

                        <h3 className="about">about:</h3>
                        <a
                          className="googleEvent"
                          href={event.htmlLink}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          details on Google Calendar
                        </a>

                        <p className="description"> {event.description}</p>
                      </div>
                    )}



                  </div>
                </div >
              </Card.Body>

            </Card >
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Event;
