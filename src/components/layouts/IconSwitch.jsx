import {useRef} from 'react'

export const IconSwitch = (props) => {
  const ref = useRef(null);
  const { icon, onSwitch, listIcon } = props;

  function textStatus() {
    const test = ref.current.id
    const filter = listIcon.find((item) => item != test);
    onSwitch(filter);
  }

  if(icon === 'view_list') {
    return (
      <button className='btn-switch' onClick={textStatus}>
        <span className="material-symbols-outlined" ref={ref} id='view_list'>
          apps
        </span> 
      </button>
    )
  } else if (icon === 'view_cards') {
    return (
      <button className='btn-switch' onClick={textStatus}>
         <span className="material-symbols-outlined" ref={ref} id='view_cards'>
          format_list_bulleted 
        </span> 
      </button>
    )
  } else {
    return (
      <div>IconSwitch</div>
    )
  }
}
