import {useState} from 'react';
import { IconSwitch } from './IconSwitch';
import './iconSwitch.css';
import { View } from './View';




const Store = () => {
    const data = {
        listIcon: ['view_list', 'view_cards'],
        icon: 'view_list',
        products:[{
            name: "Nike Metcon 2",
            price: "130",
            color: "red",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "blue",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
          }, {
            name: "Nike Metcon 2",
            price: "130",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
          }, {
            name: "Nike free run",
            price: "170",
            color: "black",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
          }, {
            name: "Nike Metcon 3",
            price: "150",
            color: "green",
            img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
        }],
    }

    const [store, setStore] = useState(data);

    let products = [...store.products];

    function onSwitch(filter) {       
      setStore({...store, icon: filter});
    }

  return (
    <>
        <IconSwitch icon={store.icon} onSwitch={onSwitch} listIcon={store.listIcon}/>

        <div className='content'>
            <View products={products} icon={store.icon}/>
        </div>
    </>
  )
}

export default Store
