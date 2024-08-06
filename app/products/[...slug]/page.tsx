import React from 'react'

type ProductPageProps = {
    params: {slug: string[]}
}

const ProductPage = ({ params: { slug } }: ProductPageProps) => {
  return (
    <div>ProductPage {slug}</div>
  )
}

export default ProductPage