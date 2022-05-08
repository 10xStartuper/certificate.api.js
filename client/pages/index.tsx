import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <Head>
        <title>Certificate App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form
        action="http://localhost:8080/api/create"
        method="POST"
        className="flex w-full flex-col rounded-md bg-gray-100 p-5 md:w-2/4"
      >
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
          className="m-5 rounded-xl bg-white p-5 outline-none"
          required
        />
        <select
          name="field"
          id="fields"
          className="m-5 rounded-xl bg-white p-5 outline-none"
          required
        >
          <option selected disabled>
            Select field of the course
          </option>
          <option value="Python Programming">Python Programming</option>
          <option value="2D Design">2D Design</option>
          <option value="other">other</option>
        </select>
        <input
          type="submit"
          placeholder="Full name"
          className="m-5 cursor-pointer rounded-xl bg-blue-500 p-5 text-white outline-none hover:bg-blue-600 "
          value="Get Certificate"
        />
      </form>
    </div>
  )
}

export default Home
