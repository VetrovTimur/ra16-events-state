import { DropdownList } from "./DropdownList"
import {useState} from 'react';


const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);
  let [classStatus, setClassStatus] = useState('btn-dropdown,active');
  

  const handleClick = event => {
    setIsActive(current => !current);
    setClassStatus(classStatus = event.currentTarget.className.split(' ').join(','))
  };


  return (
    <>
      <button className={`btn-dropdown ${isActive ? 'active' : ''}`}onClick={handleClick}>Account Settings</button>
      <DropdownList classStatus={classStatus}/>
    </>
  )
}

export default Dropdown
