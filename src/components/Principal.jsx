import { StandartBaner } from './StandartBaner'
import { CompReceptor } from './CompReceptor'
import { AddModal } from './AddModal';
export const Principal= ({modal,dmodal}) => {

  return (
    <section className='w-full'>
      <StandartBaner />
      <AddModal modal={modal} dmodal={dmodal}/>
      <CompReceptor/>
    </section>
  )
}
