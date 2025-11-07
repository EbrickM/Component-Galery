
import arrowIcon  from '../assets/icons/arrowIcon.svg';

export const SelecterButton = ({clases,onClick}) => {

  return (
    <section className=" w-[180px] h-screen flex items-center justify-center fixed">
        <div className={clases} onClick={onClick}>
       <img className='pr-0.5 ' src={arrowIcon} alt="" />
        </div>
    </section>
  )
}
