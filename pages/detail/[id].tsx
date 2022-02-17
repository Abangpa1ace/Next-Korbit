import React from 'react'
import { useRouter } from 'next/router'

const DetailPage = () => {
  const router = useRouter();
  console.log('taeng', router.asPath);

  return (
    <div>2222</div>
  )
}

export default DetailPage