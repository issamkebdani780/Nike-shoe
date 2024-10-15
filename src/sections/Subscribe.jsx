
const Subscribe = () => {
  return (
    <div id="contact-us" className="grid grid-cols-1 md:grid-cols-2 items-center justify-center text-center gap-10 ">
      <h1 className="text-3xl font-bold">Sign Up for <span className="text-orange-400">Updates</span> & Newsletter</h1>
      <div className="md:max-w-[500px] w-full rounded-full border-black border-2 p-2 flex justify-between">
        <input type="text" placeholder="subscribe@nike.com" className="border-none outline-none flex-1"/>
        <button className="bg-orange-400 py-2 px-4 rounded-full text-white">Sign Up</button>
      </div>
    </div>
  )
}

export default Subscribe