import './styles.css'
import { React, useEffect, useState } from 'react'
import { DropdownButton, Dropdown, ButtonGroup, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import Calendar from 'react-calendar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Time from './Time.js'
import './cal.css'

function Dropd() {
  const branches = [
    { id: '1', name: 'CSE' },
    { id: '2', name: 'ECE' },
    { id: '3', name: 'ME' },
    { id: '4', name: 'EEE' },
    { id: '5', name: 'CE' },
  ]

  const [branch, setBranch] = useState([])

  useEffect(() => {
    setBranch(branches)
  }, [])

  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false)

  return (
    <div>
      <Navbar variant="light" bg="light" expand="lg">
        <Nav>
          <Dropdown as={ButtonGroup} size="lg" menuVariant="light">
            {['Select Branch'].map((variant) => (
              <DropdownButton
                variant="info"
                className="form-control select class"
                value="0"
                align={{ lg: 'start' }}
                title={variant}
                key={variant}
                id={`dropdown-variants-${variant}`}
              >
                {branch && branch !== undefined
                  ? branch.map((br, index) => {
                      return (
                        <Dropdown.Item key={index} svalue={br.id}>
                          {br.name}
                        </Dropdown.Item>
                      )
                    })
                  : 'No Branch'}
              </DropdownButton>
            ))}
          </Dropdown>

          {/* calendar */}
          <Dropdown className="cal" as={ButtonGroup} size="lg" menuVariant="light">
            {['Calendar'].map((variant) => (
              <DropdownButton align={{ sm: 'start' }} variant="info" key={variant} title={variant}>
                <NavDropdown.Item className="calendar">
                  <div>
                    <Calendar
                      onChange={setDate}
                      value={date}
                      onClickDay={() => setShowTime(true)}
                    />
                  </div>

                  {date.length > 0 ? (
                    <p>
                      <span>Start:</span>
                      {date[0].toDateString()}
                      &nbsp; &nbsp;
                      <span>End:</span>
                      {date[1].toDateString()}
                    </p>
                  ) : (
                    <p>
                      <span>Default selected date:</span>
                      {date.toDateString()}
                    </p>
                  )}
                  <Time showTime={showTime} date={date} />
                </NavDropdown.Item>
              </DropdownButton>
            ))}
          </Dropdown>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Dropd
