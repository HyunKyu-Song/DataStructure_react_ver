/*eslint-disable*/
import $ from 'jquery';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Stack() {
   let [size, setSize] = useState('0');
   let [top, setTop] = useState(-1);
   let [modalShow, setModalShow] = useState(false);
   let [reset, setReset] = useState(false);
   let [data, setData] = useState(''); //뭐지 왜 안 됨??????

   return (
      <>
         <div className="container mt-4">
            <h2 className='text-center'>Stack</h2>

            {/* 크기를 선택하지 않고 push를 하면 뜨는 modal창 */}
            <MyVerticallyCenteredModal
               show={modalShow}
               onHide={() => setModalShow(false)}
            />

            <div style={{display:'flex'}}>
               <Form.Select name='location' className='size my-3 w-25' aria-label="Default select example" onClick={(e) => {
                  console.log($(e.target).val())

                  // if($(e.target).val() === '크기(size) 선택'){
                  // }
                  $('.main-stack').html('');
                  setTop(-1);
                  setData('');//뭐지 왜 안 됨??????
                  setSize($(e.target).val());
               }}>
                  <option>크기(size) 선택</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
               </Form.Select>
               <Example />
            </div>

            <div className='stack-menu'>
               <div>
                  <Form.Control size="lg" className='my-2 push-val' type="text" placeholder="입력할 Data" />
                  <Form.Control size="lg" type="text" disabled placeholder={`top = ${top}`} />
               </div>

               <div className='mx-2'>
                  <button className='btn btn-outline-success w-100 my-3' onClick={() => {
                     if (size == '0' || size == '크기(size) 선택') {
                        setModalShow(true);
                        setTop(-1);
                     }
                     else{
                        if (size - 1 > top) {
                           data = $('.push-val').val();
   
                           if (data != '') {
                              setTop(top + 1);
                              var createBox = `
                                 <div class='box mt-1 text-center'>
                                    <div class='box-text'>top = ${top + 1} data = ${data}</div>
                                 </div>`
                              $('.main-stack').append(createBox);
                           }
   
                        }

                     }

                  }}>push</button>
                  <button className='btn btn-outline-danger w-100 '>pop</button>
               </div>
            </div>

            <div className='main-stack mt-5'></div>

         </div>
      </>
   )
}


function MyVerticallyCenteredModal(props) {
   return (
      <Modal
         {...props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered
      >
         <Modal.Header closeButton>
            {/* <Modal.Title id="contained-modal-title-vcenter">
               Modal heading
            </Modal.Title> */}
         </Modal.Header>
         <Modal.Body>
            <h4>SIZE ERROR</h4>
            <p>
               크기(size) 선택 후 push를 눌러주세요.
            </p>
         </Modal.Body>
         <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
         </Modal.Footer>
      </Modal>
   );
}


const popover = (
   <Popover id="popover-basic">
      <Popover.Header as="h3">Stack (스택) 사용법</Popover.Header>
      <Popover.Body>
         And here's some <strong>amazing</strong> content. It's very engaging.
         right?
      </Popover.Body>
   </Popover>
);

const Example = () => (
   <OverlayTrigger trigger="click" placement="right" overlay={popover}>
      <Button variant="dark" className='m-3' title='사용법'>?</Button>
   </OverlayTrigger>
);

export default Stack;