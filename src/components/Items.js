import React from "react";
import Item from "./Item";

const Items = ({items, handleCompletedItemChecked, handleDeleteItem, editTodoItem}) => {
    return (

        items.map((item) => {
                return (
                    <Item key={item.id}
                          item={item}
                          handleCompletedItemChecked={handleCompletedItemChecked}
                          handleDeleteItem={handleDeleteItem}
                          editTodoItem={editTodoItem}
                    />
                )
            }
        )
    )
}
export default Items


// class Items extends React.Component{
//     constructor(props) {
//         super(props);
//
//     }
//
//     render() {
//         return (
//             <div>
//                 {
//
//                 }
//             </div>
//         );
//     }
//
// }
// export default Items;