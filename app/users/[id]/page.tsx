import React from 'react'

type UserDetailProps = {
    params: { id: number }
};

const UserDetailPage = ({params: { id }}: UserDetailProps) => {
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage