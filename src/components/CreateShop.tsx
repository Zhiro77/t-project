 import axios from 'axios';
import React, {useLayoutEffect, useRef ,useState, useId} from 'react';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../model';
 



 function CreateShop () {

    const inputRef = useRef<HTMLInputElement>(null);

    let navigate = useNavigate()

    let Id = useId()


    const [title, setTitle] = useState('')
    const [error, setError] = useState('')
    

    useLayoutEffect(() => {
        inputRef.current?.focus()
    }, [])


    const productData: IProduct = {
        title: '',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic',
        rating: {
            rate: 56,
            count: 46
        }
    }


    const submitHundler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        
        
        if (title.trim().length === 0) {
            setError('Please enter valide title')
            return
        }

        productData.title = title

       const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData) 
       
       

    }

    const id = useId()

    return (
        <div style={{  marginTop: '15px', marginLeft: '30px' }}>
              <form onSubmit={submitHundler}>
              <label>
                Title:
               <input 
                    id={`${Id}CreateTitle`}
                    ref={inputRef} 
                    type="text" 
                    className="border border-teal-500 pl-2" 
                    placeholder='Enter your Title'
                    onChange={(e) => setTitle(e.target.value)}
                    />
               </label>
               { error && <p className='text-red-400'>{error}</p> }
               <div>
               <button onClick={() => error && navigate('/', {replace: true})} type='submit' className='py-2 px-4 border bg-teal-400 hover:text-white mt-3'>Send</button>
               </div>
              </form>
              
        </div>
    )
}

export default CreateShop