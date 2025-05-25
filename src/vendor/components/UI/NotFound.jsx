import { GrRestaurant } from "react-icons/gr";


function NotFound({text}) {
  return (

        <div className='py-24 h-screen flex justify-center items-center '>
            <GrRestaurant className="text-[12rem]" />
            <p className="text-blackBg font-semibold">{text}</p>

        </div>
    

  )
}

export default NotFound