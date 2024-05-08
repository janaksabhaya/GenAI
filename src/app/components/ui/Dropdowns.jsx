import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';

export default function Dropdowns({ data, active, children, onChange }) {
    console.log('active', active)
    return (
        <div className="icon-dropdowns">
            <Dropdown data-bs-theme="light">
                <Dropdown.Toggle variant="icon">
                    {children}
                </Dropdown.Toggle>

                <Dropdown.Menu dir='right'>
                    {data.map((item) => (
                        <Dropdown.Item eventKey={item.value} active={active == item.value} onClick={() => onChange(item.value)}>
                            {item.label}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
