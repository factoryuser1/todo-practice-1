import React, {useState} from "react";

const Item = ({item, handleCompletedItemChecked, handleDeleteItem, editTodoItem}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newInput, setNewInput] = useState(item.content);

    const handleCheckBoxClick = item => handleCompletedItemChecked(item);

    const handleEditItem = () => {
        if (isEditing) {
            setIsEditing(false);
            editTodoItem({...item, content: newInput})
        } else {
            setIsEditing(true);
        }
    }

    return (
        <div>
            {isEditing
                ?
                <input type='text' value={newInput} onChange={(e) => setNewInput(e.target.value)}/>
                :
                item.completed ? <span><del>{item.content}</del></span> : <span> {item.content}</span>
            }

            <input type='checkbox'
                   value={item.completed}
                   defaultChecked={item.completed}
                   onChange={(e) => {
                       handleCheckBoxClick(item)
                   }}
            />
            <button onClick={(e) => {
                handleDeleteItem(item)
            }}>Delete
            </button>

            <button
                onClick={(e) => handleEditItem(e)}
            >
                {isEditing?'Save':'Edit'}
            </button>
        </div>
    )
}
export default Item
// class Item extends React.Component{
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return(
//             <div>
//                 {props.items.map((item) =>
//                 )}
//             </div>
//         )
//     }
//
// }
//
// export default Item;