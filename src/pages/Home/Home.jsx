import Vegan from '../../components/Vegan/Vegan'
import Veggie from '../../components/Veggie/Veggie'
import Spinner from '../../components/Spinner/Spinner'
import { useState } from 'react'

function Home() {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <div>
      {loading ? <Spinner /> :
        <>
          <Vegan />
          <Veggie />
        </>
      }
    </div>
  )
}
export default Home