import { StandartBaner } from './StandartBaner'
import { CompReceptor } from './CompReceptor'
import { AddModal } from './addModal';

export const Principal= ({modal,dmodal}) => {
  return (
    <section className='w-full p-4'>
      <StandartBaner/>
      <AddModal modal={modal} dmodal={dmodal}/>
      <CompReceptor/>
    </section>
  )
}
