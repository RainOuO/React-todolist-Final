import { useState ,useEffect ,useRef} from 'react'
import { API_GET_DATA } from '../../global/constants'

import Edit from "./components/Edit"
import List from "./components/List"
import './components/index.css'


async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

async function fetchSetData(data){ 
  await fetch(API_GET_DATA, {
      method: "PUT" , 
      headers:{
        'Content-type': 'application/json' 
      }, 
      body:JSON.stringify({ data }) 
    })
   }

const Home = () =>{ 
    const [data, setData] = useState([]);
    const submittingStatue = useRef (false);
    // useRef 是永遠會維持在最新狀態一個值 不影響炫覽 只要不按重新整理都是false

    useEffect(() =>{
      if (!submittingStatue.current)  {
        return
      }
      fetchSetData(data)
      .then( data => submittingStatue.current=false)
    }, [data])
    
    useEffect(() => {
      fetchData(setData)
    },  [])

    return <div className="app">
        <Edit add={setData } submittingStatue={submittingStatue} />
        <List listData={data}  deleteDate={setData} submittingStatue={submittingStatue}/>
        </div> 
}

 export default Home