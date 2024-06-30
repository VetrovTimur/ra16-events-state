import DropItem from "./DropItem";
import {useState} from 'react';

export const DropdownList = (props) => {
  let { classStatus } = props;

  const dropdownList = {
    selected: 'Profile',
    listItem: ['Profile', 'Settings', 'Become Pro', 'help', 'Log out']
  }

  const [list, setList] = useState(dropdownList);

  function change(filter) {       
    setList({...list, selected: filter});
  }

  if (classStatus === 'btn-dropdown,active') {
    return (
      <div className="box-dropdown">
        <DropItem listItem={list.listItem} change={change} selected={list.selected}/>
      </div>
    )
  }

}
