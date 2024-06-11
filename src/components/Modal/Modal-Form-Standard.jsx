import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

function ModalformStandard({ isOpened, heading, handleClose }) {
  const [show, setShow] = useState(isOpened)

  useEffect(() => {
    setShow(isOpened)
  }, [isOpened])

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop='static'>
        <Modal.Header closeButton>
          <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form style={{ overflowY: 'scroll' }}>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Name</Form.Label>
              <Form.Control type='input' placeholder='Josh Anton' autoFocus />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
              <Form.Label>Email address</Form.Label>
              <Form.Control type='email' placeholder='name@example.com' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput3'>
              <Form.Label>Company</Form.Label>
              <Form.Control type='input' placeholder='Company' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput4'>
              <Form.Label>Reference Sites</Form.Label>
              <Form.Control type='input' placeholder='XYZ, XYZ, ABC' />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput5'>
              <Form.Label>Link to Graphics</Form.Label>
              <Form.Control
                type='input'
                placeholder='Google drive link or any drive link for graphics'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput6'>
              <Form.Label>Animation References</Form.Label>
              <Form.Control
                type='input'
                placeholder='3 Reference sites to be added'
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput7'>
              <Form.Label>Domain (If purchased)</Form.Label>
              <Form.Control
                type='input'
                placeholder='www.xyz.com OR three hosting options'
              />
            </Form.Group>

            <Form.Label>Attach Files</Form.Label>
            <input style={{ display: 'flex' }} type='file' />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button
            style={{ backgroundColor: '#4599b4' }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#f3972b')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#4599b4')}
            onClick={handleClose}
          >
            Send Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalformStandard
