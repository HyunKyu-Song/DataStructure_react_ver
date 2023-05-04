/*eslint-disable*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp, faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faCss3Alt, faSquareJs, faBootstrap, faSquareFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import Marquee from 'react-fast-marquee';


function Home() {
   let [show, setShow] = useState('');
   let [upDown, setUpDown] = useState('down');

   return (
      <>
         <div className="home container mt-5 text-center">
            <header className='home-title'>
               <h2>Data Rescue <FontAwesomeIcon icon={faKitMedical} /></h2>
            </header>

            <div className='home-contentText my-5'>
               <h4>책에서 글과 그림으로 보던 자료구조는 이제 그만</h4>
               <h4>직접 데이터를 <strong>입력</strong>, <strong>삭제</strong>해보며 배우는 <strong>자료구조 시뮬레이션</strong></h4>
            </div>

            <div className='home-skill-container'>
               <div className='skill-btn' style={{ paddingLeft: '50px' }} onClick={() => {
                  if (show == '') setShow('showSkill'); else setShow('');
               }}><strong>사용 기술</strong></div>

               <div className={`home-skill my-4 ${show}`}>
                  <li><FontAwesomeIcon style={{ color: 'coral' }} className='fa-5x' icon={faHtml5} /> HTML5</li>
                  <li><FontAwesomeIcon style={{ color: '#006BC0' }} className='fa-5x' icon={faCss3Alt} /> CSS3</li>
                  <li><FontAwesomeIcon style={{ color: '#FFCD4A' }} className='fa-5x' icon={faSquareJs} /> JavaScript</li>
                  <li><FontAwesomeIcon style={{ color: '#528DD7' }} className='fa-5x' icon={faSquareFontAwesome} /> FontAwesome</li>
                  <li><FontAwesomeIcon style={{ color: '#8612FB' }} className='fa-5x' icon={faBootstrap} /> Bootstrap</li>
                  <li><FontAwesomeIcon style={{ color: '#61DBFB' }} className='fa-5x' icon={faReact} /> React</li>
               </div>
            </div>
            {/* <h3><strong>시뮬레이션 예시</strong></h3> */}
            <Marquee className='w-100 mt-5' speed={150} gradient={true} pauseOnClick={true}>
               <img src='./img/stack1.jpg' className='w-50 example-img'></img>
               <img src='./img/stack2.jpg' className='w-50 example-img'></img>
               <img src='./img/stack3.jpg' className='w-50 example-img'></img>
               <img src='./img/stack4.jpg' className='w-50 example-img'></img>
               <img src='./img/stack5.jpg' className='w-50 example-img'></img>
               <img src='./img/queue1.jpg' className='w-50 example-img'></img>
               <img src='./img/queue2.jpg' className='w-50 example-img'></img>
               <img src='./img/queue3.jpg' className='w-50 example-img'></img>
               <img src='./img/queue4.jpg' className='w-50 example-img'></img>
               <img src='./img/queue5.jpg' className='w-50 example-img'></img>
            </Marquee>
            
            {
               upDown == 'down' ?
                  <>
                     <FontAwesomeIcon onClick={() => {
                        window.scrollBy(0, 900);
                        setUpDown('up');
                     }} className='fa-3x down' icon={faAnglesDown} />
                     <strong className='down-text'>Code가 궁금하다면❓</strong>
                  </>
                  : <FontAwesomeIcon onClick={() => {
                     window.scrollBy(0, -2000);
                     setUpDown('down');
                  }} className='fa-3x up' icon={faAnglesUp} />
            }
         </div>

         <div className='home-example container text-center my-5'>
            <h3><strong>C언어로 알아보는 자료구조</strong></h3>
         </div>
      </>
   )
}

export default Home;