import { IProduct } from '../model'
import {useState, useMemo} from 'react'

interface ProductProps {
    product: IProduct | any
}

export const Products = (props: ProductProps) => {

    const [details, setDetails] = useState(false)

    const btnClasses = useMemo(() => {
        return details ? 'py-2 px-4 border bg-yellow-400' : 'py-2 px-4 border bg-blue-400'
    }, [details])

    return (
        <div className={'border py-2 px-4 rounded flex flex-col items-center mb-2'}>
            <img src={props.product.image} alt={'img'} className='w-1/6 bg-cover' />
            <p>{props.product.title}</p>
            <span><b>{props.product.price} $</b></span>
            <button 
            onClick={() => setDetails(!details)}
            className={btnClasses}
            >{details ? 'Hide details' : 'Show details'}</button>
            <p>{details && props.product.description}</p>
            <p>Rate: {props.product.rating.rate}</p>
            
        </div>
    )
}