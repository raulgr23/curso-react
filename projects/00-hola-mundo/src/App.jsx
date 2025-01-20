import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    const [name, setName] = useState('midudev')
    const midudev = { userName: name, initialIsFollowing: true}
   // const pheralb = { isFollowing: false, userName: 'pheralb'}

    // const formatUserName = (userName) => `@${userName}`

    return (
        <section className="App">
            <TwitterFollowCard {...midudev}>
                Miguel Ángel Durán
            </TwitterFollowCard>


            <TwitterFollowCard
                userName="pheralb">
                Pablo Hernandez
            </TwitterFollowCard>
            
            <button onClick={() => setName('pedromichel')}>
                Cambio nombre
            </button>
            

        </section>
    )
}