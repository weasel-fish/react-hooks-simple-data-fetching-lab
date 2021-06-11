import {useEffect, useState} from 'react'

// create your App component here
function App() {
    const [isLoaded, setLoaded] = useState(false)
    const [imgUrl, setUrl] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(resp => resp.json())
        .then(data => {
            setUrl(data.message)
            setLoaded(true)
        })

    }, [])

    if(!isLoaded) return <p>Loading...</p>

    return <img src={imgUrl} alt='A Random Dog'/>
}

export default App