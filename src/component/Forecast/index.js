import React,{useState} from 'react'

export default function Forecast() {

    const [input,setInput] = useState('')
    const [search,setSearch] = useState({})

    const forecast = (e) => {
        e.preventDefault()
        fetch('url')
        .then((res)=>{
            setInput('')
            setSearch(res)
            console.log(res)
        })
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            
        </div>
    )
}
