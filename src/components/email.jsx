function Email(){
  return(
    <form action="" className="grid grid-cols-3 gap-5 w-2/5 mb-20">
      <input type="email" name="email" id="email" className="border-2 rounded-3xl py-3 pl-4 col-span-2" placeholder="Your emial adress..."/>
      <input type="button" value="Notify Me" className="bg-blue-600 rounded-3xl text-white font-semibold text-center row-span-1"/>
    </form>
  )
}

export default Email