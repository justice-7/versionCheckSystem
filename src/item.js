import React from 'react';
import "./styles.css"
import Del from "./bDel";
import Modi from "./bModi";
import Test from "./bTest";

function Item({item}){
    return (
      <tr>
        <td>{item.idx}</td>
        <td>{item.os}</td>
        <td>{item.version}</td>
        <td>{item.update_type}</td>
        <td>{item.message}</td>
        <td>{item.package_name}</td>
        <td>{item.regdate}</td>
        
        <Test text={"TEST"}/>
        <Modi text={"수정"}/>
        <Del text={"삭제"}/>
        
      </tr>
        
    );
}
export default Item;