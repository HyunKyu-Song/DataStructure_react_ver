/*eslint-disable*/
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';


function Stack() {
   let [size, setSize] = useState(0);
   let [box, setBox] = useState([]);
   let [pushVal, setPushVal] = useState('');
   let [top, setTop] = useState(-1);
   let [modalShow, setModalShow] = useState(false);
   let [ment, setMent] = useState('apple');
   
   return (
      <>
         <header className='container'>
            <Alert variant='dark' className='stack-header text-center mt-2'>
               <h2>S T A C K</h2>
            </Alert>
         </header>

         <main className="stack-main container">

            <div className='stack-size'>
               <input onInput={(e) => {
                  setSize(e.target.value);
               }} type='number' placeholder='size' max={5} min={0} />{' '}
               <Button variant="outline-primary" onClick={() => {
                  setTop(-1);
                  setBox([]);
               }}>reset</Button> <Example />
            </div>

            <div className='stack-push my-2'>
               <input onInput={(e) => {
                  setPushVal(e.target.value);
               }} type='text' maxLength='5' placeholder='Stack 값 입력' />{' '}
               <Button variant="outline-success" onClick={() => {
                  setTop(top => top + 1);
                  if (size == 0) {
                     setModalShow(true);
                     setMent('Size 미입력');
                     setTop(top => top - 1);
                  }
                  else if (size-1 > top) {
                     let copy = [...box];
                     copy.unshift(pushVal);
                     setBox(copy);
                  }
                  else if(size-1 == top){
                     setTop(top => top - 1);
                     setModalShow(true);
                     setMent('Full');
                  }
                  console.log(size, top);
               }}>push</Button>
            </div>

            <div className='stack-pop'>
               <input type='number' min={-1} disabled placeholder={`top = ${top}`} />{' '}
               <Button variant="outline-danger" onClick={() => {
                  if(top === -1){
                     setModalShow(true);
                     setMent('Empty');
                  }
                  else if (top > -1) {
                     let copy = [...box];
                     copy.shift();
                     setBox(copy);
                     setTop(top - 1);
                  }
               }}>pop</Button>
            </div>

            <SizeAlert show={modalShow} ment={ment} onHide={() => setModalShow(false)} />

            {
               box.map(function (item, i) {
                  return (
                     <>
                        <div className='stack-box mt-2' key={i} >
                           <h4 className='text-center pt-3'>{item}</h4>
                           <p className='text-center'>top = {box.length - 1 - i}</p>
                        </div>
                     </>
                  )
               })
            }

         </main>

         <footer></footer>
      </>
   )
}

const popover = (
   <Popover id="popover-basic">
      <Popover.Header as="h3">Popover right</Popover.Header>
      <Popover.Body>
         And here's some <strong>amazing</strong> content. It's very engaging.
         right?
      </Popover.Body>
   </Popover>
);

const Example = () => (
   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="outline-dark">사용법</Button>
   </OverlayTrigger>
);


function SizeAlert(props) {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
               🚨Error🚨
            </Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <h4>{props.ment}</h4>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
         </Modal.Footer>
      </Modal>
   );
}

export default Stack;