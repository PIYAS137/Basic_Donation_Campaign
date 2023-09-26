import { Link } from "react-router-dom"

export const Error = () => {
  return (
    <div className=" h-screen w-full flex flex-col items-center justify-center">
        <h1 className='text-6xl text-red-600'>404</h1>
        <h1 className='text-xl my-6 font-semibold text-red-600'> Route Not Found</h1>
        <Link to={'/'}><button className="btn btn-primary">Go Home</button></Link>
    </div>
  )
}
