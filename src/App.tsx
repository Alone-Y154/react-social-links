function App() {
  return (
  <div className="bg-[#141414] flex justify-center items-center w-screen h-screen">
    <div className="bg-[#1F1F1F] rounded-xl w-[327px] md:w-[384px] md:p-10 flex p-6 flex-col items-center justify-center gap-6">
      <p className="w-[88px] h-[88px] bg-[url('/me.png')] bg-cover rounded-full"></p>
      <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-white text-2xl font-semibold">Yashwanth Krishna</p>
          <p className="text-[#C4F82A] text-sm font-bold ">Bangalore, India</p>
      </div>
      <p className="text-sm text-white font-normal">"Front-end developer (React JS)."</p>
      <a className="w-[279px] md:w-[304px] hover:bg-[#C4F82A] hover:text-black cursor-pointer text-white p-3 rounded-lg bg-[#333] flex justify-center items-center" href="https://github.com/Alone-Y154"><p className="  text-sm font-bold">Github</p></a>
      <a className="w-[279px] md:w-[304px] hover:bg-[#C4F82A] hover:text-black cursor-pointer text-white p-3 rounded-lg bg-[#333] flex justify-center items-center" href="https://www.frontendmentor.io/profile/Alone-Y154"><p className="  text-sm font-bold">Frontend Mentor</p></a>
      <a className="w-[279px] md:w-[304px] hover:bg-[#C4F82A] hover:text-black cursor-pointer text-white p-3 rounded-lg bg-[#333] flex justify-center items-center" href="https://www.linkedin.com/in/yashwanth-krishna-390015168/"><p className="  text-sm font-bold">LinkedIn</p></a>
      <a className="w-[279px] md:w-[304px] hover:bg-[#C4F82A] hover:text-black cursor-pointer text-white p-3 rounded-lg bg-[#333] flex justify-center items-center" href="https://twitter.com/yashwanth_kris_"><p className="  text-sm font-bold">Twitter</p></a>
      <a className="w-[279px] md:w-[304px] hover:bg-[#C4F82A] hover:text-black cursor-pointer text-white p-3 rounded-lg bg-[#333] flex justify-center items-center" href="https://www.instagram.com/yashwanth_kris/"><p className="  text-sm font-bold">Instagram</p></a>
    </div>
  </div>
  )
}

export default App;
