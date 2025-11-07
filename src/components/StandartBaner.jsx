
import lupeIcon from '../assets/icons/lupeIcon.svg';

export const StandartBaner = () => {


  return (
    <section className='flex justify-center items-center w-full fixed'>
    <input type="text"  placeholder='Busca un componente' className='buscador p-2 pr-4 text-[#ebe5e5] placeholder:text-[#ebe5e54a]
     rounded-4xl border-[#ebe5e5] border-2 fixed text-left ml-20'/> 
     <img className='object-cover h-[24px] w-auto invert-100 ml-60' src={lupeIcon} alt="icon" />
    </section>
  )
}

