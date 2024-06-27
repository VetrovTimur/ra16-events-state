import {useState} from 'react';

const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;

  const [likes, setLikes] = useState(0)
  const testStatus = () => {
      setLikes(likes + 1); 
      console.log('filters: ', filters);
      console.log('selected: \n', selected);
      onSelectFilter('Flayers')
      console.log('onSelectFilter: \n', selected);
  }

  function statusText() {
    console.log(filters.item);
  }
  


  return (
   <>
   <div>Test</div>
    <button onClick={testStatus}>
      {`${likes > 0 ? likes : 'Add Likes'}`}
    </button>
    
    <div>Toolbar</div>
    <ul className="toolbar">
        {filters.map((item, index) => (
            <li className="toolbar__item" key={index}>
              <button className="btn" onClick={statusText}>
                {item}
              </button>
            </li>
        ))}
    </ul>
   </>
  )
}

export default Toolbar
