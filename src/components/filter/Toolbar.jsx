const Toolbar = (props) => {
  const { filters, selected, onSelectFilter } = props;
  
  function textStatus(event) {
    const filter = event.currentTarget.value;
    onSelectFilter(filter)
  }
  
  return (
   <>
    <ul className="toolbar">
        {filters.map((item, index) => (
            <li className="toolbar__item" key={index}>
              <button className={`btn ${item === selected ? 'active' : ''}`}  onClick={textStatus} value={item}>
                {item}
              </button>
            </li>
        ))}
    </ul>
   </>
  )
}

export default Toolbar
