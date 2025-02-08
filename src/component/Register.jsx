import React from 'react'

const Register = ({openLogin}) => {
  return (
    <div>
        <h2 className='text-2xl font-bold mb-4'>Sign up</h2>
        <form>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Name</label>
                <input type="text" className='w-full px-3 py-2 border' 
                placeholder='Enter Name'/>
                
            </div>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Email</label>
                <input type="email" className='w-full px-3 py-2 border'
                placeholder='Enter Email' />
            </div>
            <div className='mb-4'>
                <label htmlFor="" className='block text-gray-700'>Password</label>
                <input type="password" className='w-full px-3 py-2 border'
                placeholder='Enter Password' />
            </div>
            
            <div className='mb-4'>
                <button type='submit' className='w-full bg-red-600 text-white py-2'>sign up</button>
            </div>
        </form>
        <div className='text-center'>
            <span className='text-gray-700'>Already have an account? </span>
            <span className='text-red-800'onClick={openLogin}>Login</span>
        </div>
    </div>
  )
}

export default Register