import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

export function App () {
    //const [name, setName] = useState('midudev')
    //const midudev = { userName: name, initialIsFollowing: true}
    //const pheralb = { isFollowing: false, userName: 'pheralb'}

    //const formatUserName = (userName) => `@${userName}`

    return (
        <section className='App'>
            {
                users.map(({ userName, name, isFollowing }) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}