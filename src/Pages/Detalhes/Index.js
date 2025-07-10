import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import api from "../../Services/api"

export default function Detalhes(){
  const { id } = useParams()
  const [filme, setFilme] = useState()
  const [loading, setLoading] = useState()

  useEffect(() =>{
    async function loadFilme(){
      await api.get(`movie/${id}`, {
        params: {
          api_key: 'bb4b1d92c144d94280a168c9b17cb030',
          language: 'pt-BR'
        }
      })
      .then(response => {
        setFilme(response.data)
        setLoading(false)
      })
      .catch(() => {
        console.log('filme não encontrado')
        setLoading(false)
      })
    }

    loadFilme()

    return () => {
      console.log('componente desmontado')
    }
  }, [])
  

  return (
    <div>
      <h1>Detalhes do filme: {id}</h1>
    </div>    
  )
}