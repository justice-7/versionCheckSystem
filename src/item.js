import React from 'react';
import "./styles.css"
import Del from "./bDel";
import Modi from "./bModi";
import Test from "./bTest";


function Item({item}){
  return (
      <tr className='color'>
        <td>{item.idx}</td>
        <td>{item.service_name}</td>
        <td>{item.os}</td>
        <td>{item.version}</td>
        <td>{item.update_type.toString()}</td>
        <td>{item.message}</td>
        <td>{item.package_name}</td>
        <td>{item.regdate.toString().substring(0,19)}</td>
        
        <Test item={item}/>
        <Modi item={item}/>
        <Del item={item}/>
        
      </tr>
        
    );
}
export default Item;