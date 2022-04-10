import Item from "./Item"


const List = ({ listData, deleteDate ,submittingStatue }) => {
    return <div className="lsit">
        {
            listData.map((item) => {
                const { note, date, time ,id} = item
                return <Item key={id} 
                id={id}
                note={note}
                 date={date} 
                 time={time} 
                 deleteDate={deleteDate}
                 submittingStatue= {submittingStatue} 
                 />
            })
        }



    </div>
}

export default List