import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: "midudev",
    name: "Miguel Ángel Durán",
    isFollowing: true
  },
  {
    userName: "pheralb",
    name: "Pablo Heraldo",
    isFollowing: false
  },
  {
    userName: "willsmith",
    name: "Will Smith",
    isFollowing: true
  },
  {
    userName: "TMChein",
    name: "Tomas Chein",
    isFollowing: false
  }
]

export function App() {
  return (
    <section className="App">
      {
        users.map(({userName, name, isFollowing}) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}            
          >
            {name}
          </TwitterFollowCard>
          )
        )
      }    
    </section>
  )
}