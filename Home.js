/*eslint-disable*/
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown, faAnglesUp, faKitMedical } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faCss3Alt, faSquareJs, faBootstrap, faSquareFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react';
import Marquee from 'react-fast-marquee';


function Home() {
   let [show, setShow] = useState('');
   let [upDown, setUpDown] = useState('down');
   let [img1, setImg1] = useState('');
   let [img2, setImg2] = useState('');
   let [bookEx, setBookEx] = useState('');


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

               <p className='home-skill-mobile'><strong>사용 기술</strong></p>
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

            <div className='home-example'>
               <Marquee className='w-100 mt-5' speed={100} gradient={true} pauseOnClick={true}>
                  <img src='./img/stack1.jpg' className='me-5 example-img'></img>
                  <img src='./img/stack2.jpg' className='me-5 example-img'></img>
                  <img src='./img/stack3.jpg' className='me-5 example-img'></img>
                  <img src='./img/stack4.jpg' className='me-5 example-img'></img>
                  <img src='./img/stack5.jpg' className='me-5 example-img'></img>
                  <img src='./img/queue1.jpg' className='me-5 example-img'></img>
                  <img src='./img/queue2.jpg' className='me-5 example-img'></img>
                  <img src='./img/queue3.jpg' className='me-5 example-img'></img>
                  <img src='./img/queue4.jpg' className='me-5 example-img'></img>
                  <img src='./img/queue5.jpg' className='me-5 example-img'></img>
               </Marquee>
            </div>

            <div className='home-example-mobile'>
               <Marquee className='w-100 home-example-marquee-mobile' speed={90} gradient={false} pauseOnClick={true}>
                  <img src='./img/queue1_M.jpg' className='me-3 example-img'></img>
                  <img src='./img/queue2_M.jpg' className='me-3 example-img'></img>
                  <img src='./img/queue3_M.jpg' className='me-3 example-img'></img>
                  <img src='./img/queue4_M.jpg' className='me-3 example-img'></img>
                  <img src='./img/queue5_M.jpg' className='me-3 example-img'></img>
               </Marquee>
            </div>

            {
               upDown == 'down' ?
                  <>
                     <div>
                        <FontAwesomeIcon onClick={() => {
                           window.scrollBy(0, 940); setUpDown('up');
                        }} className='fa-3x down' icon={faAnglesDown} />
                        <strong onClick={() => {
                           window.scrollBy(0, 940); setUpDown('up');
                        }} className='down ms-5 down-text'>More Want ✍</strong>
                     </div>
                  </>
                  : <FontAwesomeIcon onClick={() => {
                     window.scrollBy(0, -1291);
                     setUpDown('down');
                     // console.log(window.scrollX)
                     // console.log(window.scrollY)
                  }} className='fa-3x up' icon={faAnglesUp} />
            }
         </div>

         <div className='home-book container text-center'>
            <h2><strong>C언어</strong>로 알아보는 자료구조</h2>
            <h4 className='my-4'>꼭 C언어로 공부할 필요는 없지만 다른 언어는 이미 만들어진 함수가 있어서 직접 구현해 보고 싶다면 C언어를 추천해 드립니다.</h4>
            <h4><string>💡 C언어 추천 교재</string></h4>
            <button className='btn btn-outline-dark' onClick={() => {
               setImg2('');
               setImg1('smooth bookEx');
            }}>📘 윤성우의 열혈 자료구조</button>
            <button className='btn btn-outline-dark' onClick={() => {
               setImg1('');
               setImg2('smooth bookEx');
            }}>📙 C언어로 쉽게 풀어쓴 자료구조</button>
            {/* <div className='book-img mt-3'>
               <img className={`book1 ${img1} ${bookEx}`} src='./img/book1.jpg'></img>
               <img className={`book2 ${img2} ${bookEx}`} src='./img/book2.jpg'></img>
               <div className={`book1-info ${img1}`}>
                  <h4>윤성우의 열혈 자료구조</h4>
                  <p>저자: 윤성우</p>
                  <p>출판: 오렌지미디어</p>
                  <p>발행: 2012.01.16</p>
                  <p>정가: 27,000</p>
                  <p>
                     - 책과 코드만으로 이해가 어렵다면 강의를 보며 공부할 수 있음<br />
                     - 교재를 구매하면 동영상 강의를 1년 동안 무료로 제공<br />
                     - 강의 퀄리티도 높으며, 교재의 코드도 파일로 제공<br />
                  </p>
               </div>
               <div className={`book2-info ${img2}`}>
                  <h4>C언어로 쉽게 풀어쓴 자료구조</h4>
                  <p>저자: 천인국</p>
                  <p>출판: 생능출판</p>
                  <p>발행: 2019.02.22</p>
                  <p>정가: 29,000</p>
                  <p>- 난이도가 쉽고 간단한 코드를 사용함<br />
                     - 컬러판 교재로 학습 효과 극대화<br />
                     - 가상 실습 프로그램 제공<br />
                  </p>
               </div>
            </div> */}
            <div className='book-img mt-3'>
               <button className='btn btn-success w-25 책설명'>책 정보</button>
               <img className={`book1 ${img1} ${bookEx}`} src='./img/book1_M.jpg'></img>
               <img className={`book2 ${img2} ${bookEx}`} src='./img/book2_M.jpg'></img>
               <div className={`book1-info ${img1}`}>
                  <h4>윤성우의 열혈 자료구조</h4>
                  <p>저자: 윤성우</p>
                  <p>출판: 오렌지미디어</p>
                  <p>발행: 2012.01.16</p>
                  <p>정가: 27,000</p>
                  <p>
                     - 책과 코드만으로 이해가 어렵다면 강의를 보며 공부할 수 있음<br />
                     - 교재를 구매하면 동영상 강의를 1년 동안 무료로 제공<br />
                     - 강의 퀄리티도 높으며, 교재의 코드도 파일로 제공<br />
                  </p>
               </div>
               <div className={`book2-info ${img2}`}>
                  <h4>C언어로 쉽게 풀어쓴 자료구조</h4>
                  <p>저자: 천인국</p>
                  <p>출판: 생능출판</p>
                  <p>발행: 2019.02.22</p>
                  <p>정가: 29,000</p>
                  <p>- 난이도가 쉽고 간단한 코드를 사용함<br />
                     - 컬러판 교재로 학습 효과 극대화<br />
                     - 가상 실습 프로그램 제공<br />
                  </p>
               </div>
            </div>
         </div>
      </>
   )
}

export default Home;