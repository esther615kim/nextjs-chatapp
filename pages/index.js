import Head from 'next/head'
import Image from 'next/image'
import Sidebar from '../src/components/Sidebar'

export default function Home() {
  return (
    <div>
      <Sidebar />
      <h3>index page</h3>
    </div>
  )
}
