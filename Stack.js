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
   let [ment, setMent] = useState('');
   let [color, setColor] = useState(['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']);

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
                  if(e.target.value >= 0 && e.target.value <= 5)
                     setSize(e.target.value);
                  else{
                     setModalShow(true);
                     setMent('Size 오류');
                     setSize(0);
                  }
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
                     setMent('Size 오류');
                     setTop(top => top - 1);
                  }
                  else if (size - 1 > top) {
                     let copy = [...box];
                     copy.unshift(pushVal);
                     setBox(copy);
                  }
                  else if (size - 1 == top) {
                     setTop(top => top - 1);
                     setModalShow(true);
                     setMent('Full');
                  }
                  //console.log(size, top);
               }}>push</Button>
            </div>

            <div className='stack-pop'>
               <input type='number' min={-1} disabled placeholder={`top = ${top}`} />{' '}
               <Button variant="outline-danger" onClick={() => {
                  if (top === -1) {
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
                        <div className='stack-box mt-2' style={{ backgroundColor: color[box.length - 1 - i] }} key={i} >
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
   <Popover id="popover-basic" style={{maxWidth:'none'}}>
      <Popover.Header as="h3">💡 사용법</Popover.Header>
      <Popover.Body>
         <div>
            <p>👉 size 선택 ( 1 ~ 5 )</p>
            <p>👉 삽입할 데이터 입력하고 <b><q>push 클릭</q></b></p>
            <p>👉 데이터 삭제하고 싶을 때 <b><q>pop 클릭</q></b></p>
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

export default Stack;