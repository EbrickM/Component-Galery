

export const SearchBanner = ({list,state}) => {
  return (
    <section className={`fixed z-250 w-full flex justify-center top-14 left-12 ${state}`}>
      <div className="w-30 bg-[#151515] text-center flex flex-col gap-5 rounded-b-2xl py-2">
             {list.map((component) => (
     
                        <div className="text-amber-50 w-full hover:bg-[#0f0f0f] rounded-2xl cursor-pointer py-2 px-4">{component.nombre}</div>
                     ))} 
      </div>
    </section>
  )
}
