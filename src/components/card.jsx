import React from 'react'

function Card({item}) {
  return (
    <div className='container mx-auto flex flex-wrap justify-center items-start space-x-14 space-y-8'>
<div className='col-auto justify-center'>
    {item.map((val) => (
        <div key={val.id} className='col-md-4 col-sm-6 my-3 border-0'>
            <div className=' card-img-top text-center'>
                <img src={val.img} alt="" className='w-72' />
            </div>
            <div className='card-body'>
                <div className='card-title font-bold '>
                    {val.title} -- {val.price}

                </div>
                    <div className='card-text'>
                        {val.desc}


                    </div>

            </div>



        </div>


))}

</div>

    </div>
    
  )
}

export default Card