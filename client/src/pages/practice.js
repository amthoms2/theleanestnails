// import { useState } from "react";

import Practice from '../components/Book/Practice/Practice'

const PracticePage = () => {
  // const [page, setPage] = useState(0);

  return (
    <div>
      <Practice />
      {/* <Practice setPage={setPage}/> */}
      {/* {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null} */}
    </div>
  )
}

export default PracticePage
