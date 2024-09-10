import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <header className='text-gray-700 border-b border-gray-100 flex container mx-auto p-5 flex-col md:flex-row items-center'>
        <h1><a href="#" className='font-medium text-gray-900 text-xl ml-3'>テストポートフォリオ</a></h1>
        <nav className='md:ml-auto text-base'>
          <ul className='flex'>
            <li><a href="" className='mr-5 hover:text-blue-400 duration-300 mb-4 md:mb-0'>menu1</a></li>
            <li><a href="" className='mr-5 hover:text-blue-400 duration-300 mb-4 md:mb-0'>menu2</a></li>
            <li><a href="" className='mr-5 hover:text-blue-400 duration-300 mb-4 md:mb-0'>menu3</a></li>
            <li><a href="" className='hover:text-blue-400 duration-300 mb-4 md:mb-0'>menu4</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section className='text-gray-600' id="home">
          <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center justify-between text-left'>
            <div className='md:w-1/2 lg:max-w-lg mb-16 md:mb-0 lg:pr-24 md:pr-16 text-center md:text-left'>
              <h1 className='text-3xl sm:text-6xl text-gray-900 font-medium mb-8'>Hi!<br />
                I'm Ysk<br />
                Web Developer.
              </h1>
              <p className='mb-8 leading-relaxed'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure aut dolorem molestias impedit illum in culpa dolores quaerat aliquam laudantium!</p>
              <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>contact </button>
            </div>
            <div className='md:w-1/2 '>
              <img src="https://placehold.jp/350x550.png" alt="" /></div>
          </div>
        </section>
        <section className='text-gray-700 border-t border-gray-700'>
          <div className='container px-5 py-24 mx-auto'>
            <div className='text-center mb-20'>
              <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About me</h1>
              <p className='pb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, voluptate perspiciatis veniam tenetur, natus aliquid tempora dolorem id, veritatis adipisci nisi libero deserunt minima. A reprehenderit nesciunt explicabo vero inventore.</p>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat assumenda vitae beatae quod aliquam, consectetur, nemo laudantium eligendi pariatur autem saepe commodi porro dolore cumque excepturi dolores quos. Vero ducimus quos aperiam alias facilis sunt error quis porro! Voluptatibus minima modi harum iste nobis assumenda totam doloremque! Cupiditate, eius sapiente eum et ducimus dolor non culpa. Doloribus aspernatur voluptatum delectus vero eum nulla tempora tempore, sit alias necessitatibus molestiae a blanditiis dolores eligendi similique eos fugiat possimus velit dolor aliquid. Similique quis eius provident quo vitae laborum, magni tempora corporis maxime temporibus repellendus possimus animi ipsum molestias quaerat distinctio odit.</p>
            </div>
            {/* card */}
            <ul className='flex flex-wrap gap-4 justify-between box-border'>
            <li className='md:w-1/3 bg-gray-100 rounded-lg text-left p-8'>
                <div className="flex items-center mb-3">
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 4H3M20 8H6M18 12H9M15 16H8M17 20H12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developer
                  </h2>

                </div>
                <div>
                  <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nam dignissimos aliquid necessitatibus illum voluptas possimus alias facilis vitae ex!
                  </p>
                  <p><a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.0005 15.9995L15.0005 11.9995M15.0005 11.9995L11.0005 7.99951M15.0005 11.9995H3.00049M11.0005 2.99951H17.7997C18.9198 2.99951 19.4799 2.99951 19.9077 3.2175C20.284 3.40925 20.59 3.71521 20.7817 4.09153C20.9997 4.51935 20.9997 5.07941 20.9997 6.19951V17.7995C20.9997 18.9196 20.9997 19.4797 20.7817 19.9075C20.59 20.2838 20.284 20.5898 19.9077 20.7815C19.4799 20.9995 18.9198 20.9995 17.7997 20.9995H11.0005" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a></p>
                </div>
              </li>
              <li className='md:w-1/3 bg-gray-100 rounded-lg text-left p-8'>
                <div className="flex items-center mb-3">
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 4H3M20 8H6M18 12H9M15 16H8M17 20H12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developer
                  </h2>

                </div>
                <div>
                  <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nam dignissimos aliquid necessitatibus illum voluptas possimus alias facilis vitae ex!
                  </p>
                  <p><a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.0005 15.9995L15.0005 11.9995M15.0005 11.9995L11.0005 7.99951M15.0005 11.9995H3.00049M11.0005 2.99951H17.7997C18.9198 2.99951 19.4799 2.99951 19.9077 3.2175C20.284 3.40925 20.59 3.71521 20.7817 4.09153C20.9997 4.51935 20.9997 5.07941 20.9997 6.19951V17.7995C20.9997 18.9196 20.9997 19.4797 20.7817 19.9075C20.59 20.2838 20.284 20.5898 19.9077 20.7815C19.4799 20.9995 18.9198 20.9995 17.7997 20.9995H11.0005" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a></p>
                </div>
              </li>
              <li className='md:w-1/3 bg-gray-100 rounded-lg text-left p-8'>
                <div className="flex items-center mb-3">
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 4H3M20 8H6M18 12H9M15 16H8M17 20H12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>
                    Web Developer
                  </h2>

                </div>
                <div>
                  <p className=''>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nam dignissimos aliquid necessitatibus illum voluptas possimus alias facilis vitae ex!
                  </p>
                  <p><a href="#" className='flex mt-3 text-green-500 items-center'>もっと見る
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.0005 15.9995L15.0005 11.9995M15.0005 11.9995L11.0005 7.99951M15.0005 11.9995H3.00049M11.0005 2.99951H17.7997C18.9198 2.99951 19.4799 2.99951 19.9077 3.2175C20.284 3.40925 20.59 3.71521 20.7817 4.09153C20.9997 4.51935 20.9997 5.07941 20.9997 6.19951V17.7995C20.9997 18.9196 20.9997 19.4797 20.7817 19.9075C20.59 20.2838 20.284 20.5898 19.9077 20.7815C19.4799 20.9995 18.9198 20.9995 17.7997 20.9995H11.0005" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></a></p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className='text-gray-700 border-t border-gray-700'>
          <div className=' flex flex-wrap bg-gray-100 rounded-lg text-left p-8'>
          {/* left */}
          <img className='mb-20 block mx-auto' src="https://placehold.jp/350x350.png" alt="" />
          {/* right */}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
<h2 className='text-2xl sm:text-3xl font-medium text-gray-800 mb-10'>My skills</h2>
<div>
<h3>html</h3>
  <div className="shadow bg-green-100 mt-2 w-full">
    <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"100%"}}>100%</div>
  </div>
  <h3>css</h3>
  <div className="shadow bg-green-100 mt-2 w-full">
    <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"95%"}}>95%</div>
  </div>
  <h3>javascript</h3>
  <div className="shadow bg-green-100 mt-2 w-full">
    <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"85%"}}>85%</div>
  </div>
  <h3>jQuery</h3>
  <div className="shadow bg-green-100 mt-2 w-full">
    <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"80%"}}>80%</div>
  </div>
  <h3>React</h3>
  <div className="shadow bg-green-100 mt-2 w-full">
    <div className="bg-green-600 text-xs leading-none py-1 text-center text-white" style={{width:"15%"}}>15%</div>
  </div>
</div>

          </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App
