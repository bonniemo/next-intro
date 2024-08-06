import React from 'react'

type PhotoPageProps = {
    params: { id: number; photoId: number; }
}

const PhotoPage = ({params: {id, photoId} }: PhotoPageProps) => {
  return (
    <div>PhotoPage {id} {photoId}</div>
  )
}

export default PhotoPage