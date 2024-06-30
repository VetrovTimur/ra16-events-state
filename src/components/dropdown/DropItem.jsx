import './dropItem.css'

const DropItem = (props) => {
    let {listItem, selected, change} = props;

    function statusClick(event) {
        selected = event.currentTarget.value;
        change(selected);
    }

    return (
        <>
            {listItem.map((item, index) => (

                    <button key={index} className={`content-dropdown ${item === selected ? 'changelist' : ''}`} value={item} onClick={statusClick}>
                        {item}
                    </button>

                
            ))}
        </>
    )
}

export default DropItem
