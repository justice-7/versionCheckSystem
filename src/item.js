import React from 'react';
import "./styles.css"
import Del from "./bDel";
import Modi from "./bModi";
import Test from "./bTest";
import ServiceName from './serviceName';


function Item({item}){
  <ServiceName item={item}></ServiceName>
  return (
      <tr>
        <td>{item.idx}</td>
        <td>{item.os}</td>
        <td>{item.version}</td>
        <td>{item.update_type.toString()}</td>
        <td>{item.message}</td>
        <td>{item.package_name}</td>
        <td>{item.regdate}</td>
        
        <Test item={item}/>
        <Modi item={item}/>
        <Del item={item}/>
        
      </tr>
        
    );
}
export default Item;