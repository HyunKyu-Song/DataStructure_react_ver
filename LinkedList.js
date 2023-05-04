/*eslint-disable*/
import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';


function LinkedList() {
   let [box, setBox] = useState([]);
   let [headBox, setHeadBox] = useState('');
   let [insertVal, setInsertVal] = useState('');
   let [modalShow, setModalShow] = useState(false);
   let [ment, setMent] = useState('');
   let [cnt, setCnt] = useState(0);

   return (
      <>
         <header className='container'>
            <Alert variant='dark' className='linkedList-header text-center mt-2'>
               <h2>LINKED LIST</h2>
            </Alert>
         </header>

         <main className="linkedList-main container">

            <div className='linkedList-size'>
               <Button variant="outline-primary" onClick={() => {
                  setBox([]); setHeadBox(''); setCnt(0);
               }}>reset</Button> <Example />
            </div>

            <div className='linkedList-insert mt-2'>
               <input onInput={(e) => {
                  setInsertVal(e.target.value);
               }} type='text' maxLength='5' placeholder='입력 Data' />{' '}
               <Button variant="outline-success" onClick={() => {
                  setCnt(cnt => cnt + 1);
                  if (insertVal == '') {
                     setModalShow(true);
                     setMent('Data 미입력');
                     setCnt(cnt => cnt - 1);
                  }
                  else {
                     if (cnt < 7) {
                        let copy = [...box];

                        if (headBox == '') {
                           setHeadBox(insertVal);
                        }
                        else {
                           copy.push(insertVal);
                           setBox(copy);
                        }
                     }
                     else {
                        setModalShow(true);
                        setMent('Linked List는 동적할당으로 size제한이 없지만, Data Rescue 시뮬레이션에서는 화면크기를 고려해 node 생성을 최대 7개로 제한하고 있습니다.');
                        setCnt(cnt => cnt - 1);
                     }
                  }
               }}>Insert</Button>
            </div>

            <div className='linkedList-update my-2'>
               <input type='text' min={-1} placeholder='변경 Data Index' />{' '}
               <Button variant="outline-warning" onClick={() => {

               }}>Update</Button>
            </div>

            <div className='linkedList-delete'>
               <input type='text' min={-1} placeholder='삭제 Data' />{' '}
               <Button variant="outline-danger" onClick={() => {

               }}>Delete</Button>
            </div>

            <SizeAlert show={modalShow} ment={ment} onHide={() => setModalShow(false)} />

            <div className='linkedList-container mt-5'>
               {
                  headBox == false ? null : <HeadNodeBox headBox={headBox} />
               }
               {
                  box.map(function (item, i) {
                     return (
                        <>
                           <NodeBox item={item} i={i} cnt={cnt} setCnt={setCnt} />
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

function HeadNodeBox(props) {
   return (
      <>
         <div className='linkedList-box mx-1 aa'>
            <h4 className='text-center pt-4'>{props.headBox}</h4>
         </div>
      </>
   )
}

function NodeBox(props) {
   return (
      <>
         <FontAwesomeIcon className='fa-5x' icon={faArrowRightLong} />
         <div className='linkedList-box mx-1 mb-5' key={props.i} >
            <h4 className='text-center pt-4'>{props.item}</h4>
            {/* <h4 className='text-center pt-4'>cnt: {props.cnt}</h4> */}
         </div>
      </>
   )
}

export default LinkedList;