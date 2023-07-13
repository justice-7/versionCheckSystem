import React from 'react';
import "./styles.css"
import Item from './item';
function List({items}){
    return (
      <div>
        <table id='tables'>
            <tr id='lists'>
              <th>idx</th> 
              <th>os</th>
              <th>ver</th>
              <th>updatetype</th>
              <th>message</th>
              <th>package</th>
              <th>regdate</th>
              <th colspan="3">action</th>
            </tr>
            
          {
              items.map((item)=>
                  <Item item = {item}/> 
              )
          }
        </table>
      </div>
    );
}
export default List;