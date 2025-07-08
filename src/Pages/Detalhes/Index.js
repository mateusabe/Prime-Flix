import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Services/api"

export default function Detalhes(){
  const { id } = useParams()

  useEffect(() =>{
    async function loadFilme(){
      const response =await api.get(`movie/${id}`, {
        params: {
          api_key: 'bb4b1d92c144d94280a168c9b17cb030',
          language: 'pt-BR'
        }
      })

      console.log(response)
    }
  })
  

  return (
    <div>
      <h1>Detalhes do filme: {id}</h1>
    </div>
  )
}