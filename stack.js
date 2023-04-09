/*eslint-disable*/
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Stack() {
   let [size, setSize] = useState(0);
   let [box, setBox] = useState([]);
   let [pushVal, setPushVal] = useState('');
   let [top, setTop] = useState(-1);

   return (
      <>
         <header className='container'>
            <Alert variant='dark' className='stack-header text-center mt-2'>
               <h2>Stack (스택)</h2>
            </Alert>
         </header>

         <main className="stack-main container">

            <div className='stack-size'>
               <input onInput={(e) => {
                  setSize(e.target.value);
               }} type='number' placeholder='size' max={5} min={0} />{' '}
               <Button variant="outline-primary" onClick={()=>{
                  setTop(-1);
                  setBox([]);
               }}>reset</Button> <Example />
            </div>

            <div className='stack-push my-2'>
               <input onInput={(e) => {
                  setPushVal(e.target.value);
               }} type='text' maxLength='5' placeholder='Stack 값 입력' />{' '}
               <Button variant="outline-success" onClick={() => {
                  if (size - 1 > top) {
                     let copy = [...box];
                     copy.unshift(pushVal);
                     setBox(copy);
                     setTop(top + 1);
                  }
               }}>push</Button>
            </div>

            <div className='stack-pop'>
               <input type='number' min={-1} disabled placeholder={`top = ${top}`} />{' '}
               <Button variant="outline-danger" onClick={() => {
                  if (top > -1) {
                     let copy = [...box];
                     copy.shift();
                     setBox(copy);
                     setTop(top - 1);
                  }
               }}>pop</Button>
            </div>

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

export default Stack;