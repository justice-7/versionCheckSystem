import React, { useState } from 'react';
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
        
        <td><button>Test</button></td>
        <td><button>수정</button></td>
        <td><button>삭제</button></td>
        
      </tr>
        
    );
}
export default Item;