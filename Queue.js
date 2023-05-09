/*eslint-disable*/
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';


function Queue() {
   let [size, setSize] = useState(0);
   let [box, setBox] = useState([]);
   let [enqueueValue, setenqueueValue] = useState('');
   let [front, setFront] = useState(-1);
   let [rear, setRear] = useState(-1);
   let [modalShow, setModalShow] = useState(false);
   let [ment, setMent] = useState('');
   let [colorCnt, setColorCnt] = useState(0);
   let [color, setColor] = useState(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']);

   return (
      <>
         <header className='container'>
            <Alert variant='dark' className='queue-header text-center mt-2'>
               <h2>Q U E U E</h2>
            </Alert>
         </header>

         <main className="queue-main container">

            <div className='queue-size'>
               <input onInput={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 7)
                     setSize(e.target.value);
                  else {
                     setModalShow(true);
                     setMent('Size 오류');
                     setSize(0);
                  }
               }} type='number' placeholder='size' max={7} min={0} style={{maxWidth:'100px'}} />{' '}
               <Button variant="outline-primary" onClick={() => {
                  setFront(-1);
                  setRear(-1);
                  setBox([]);
                  setColorCnt(0);
               }}>reset</Button> <Example />
            </div>

            <div className='queue-enqueue my-2'>
               <input onInput={(e) => {
                  setenqueueValue(e.target.value);
               }} type='text' maxLength='5' placeholder='Queue 값 입력' />{' '}
               <Button variant="outline-success" onClick={() => {
                  setFront(front => front + 1);
                  if (size == 0) {
                     setModalShow(true);
                     setMent('Size 오류');
                     setFront(front => front - 1);
                  }
                  else if (size - 1 > front) {
                     let copy = [...box];
                     copy.push(enqueueValue);
                     setBox(copy);
                  }
                  else if (size - 1 == front) {
                     setFront(front => front - 1);
                     setModalShow(true);
                     setMent('Full');
                  }
                  //console.log(size, top);
               }}>enqueue</Button>
            </div>

            <div className='queue-dequeue'>
               <input type='number' min={-1} disabled placeholder={`front = ${front} rear = ${rear}`} />{' '}
               <Button variant="outline-danger" onClick={() => {
                  if (front === rear) {
                     setModalShow(true);
                     setMent('Empty');
                  }
                  else if (front > -1) {
                     let copy = [...box];
                     copy.shift();
                     setBox(copy);
                     setRear(rear + 1);
                     setColorCnt(colorCnt + 1);
                  }
               }}>dequeue</Button>
            </div>

            <SizeAlert show={modalShow} ment={ment} onHide={() => setModalShow(false)} />

            <div className='queue-container mt-5'>
               {
                  box.map(function (item, i) {
                     return (
                        <>
                           <div className='queue-box mx-1' style={{ backgroundColor: color[i + colorCnt] }} key={i} >
                              <h4 className='text-center pt-4'>{item}</h4>
                           </div>
                        </>
                     )
                  })
               }
            </div>

         </main>

         <footer></footer>
      </>
   )
}

const popover = (
   <Popover id="popover-basic"  style={{maxWidth:'none'}}>
      <Popover.Header as="h3">💡 사용법</Popover.Header>
      <Popover.Body>
         <div>
            <p>👉 size 선택 ( 1 ~ 7 )</p>
            <p>👉 삽입할 데이터 입력하고 <b><q>enqueue 클릭</q></b></p>
            <p>👉 데이터 삭제하고 싶을 때 <b><q>dequeue 클릭</q></b></p>
            <p>👉 초기화는 <b><q>reset 클릭</q></b>
            </p>
         </div>
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

export default Queue;