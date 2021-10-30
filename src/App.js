import React, {useEffect, useState} from "react";
import axios from "axios";
import TodoCreator from "./components/TodoCreator";
import Items from "./components/Items";


function App(){
    let [items, setItems] = useState([])

    const getAllItems = () =>{
        axios.get("http://localhost:3001/api/items")
            .then(result =>{
                if(result.status === 200) {
                    console.log('good')
                } else {
                    console.log('you messed up');
                }
                setItems(result.data)
                console.log(result.statusText);
            })
    }
    //it does what componentDidMount it is a class function
    //gets executed every single time our application renders
    //the second param is an array and whatever you pass to this array
    // is going to be values used when whenever they are changed, the hook is going to run
    //if you want to run it ONLY during Mount, then pass it an empty array
    //you can add a return () to clean up the sideEffect before each renders as.
    // Whatever in the return will run to clean up whatever we did last time.
    //     return ()=>{ console.log('return from resource change')}
    useEffect(()=>{
        getAllItems()
    }, []); //only if it is empty

    const handleCompletedItemChecked = async (item) =>{
        await axios.patch(`http://localhost:3001/api/items/${item.id}`, {completed:!item.completed});
        getAllItems();
    }
    const handleDeleteItem = async (item) =>{
        await axios.delete(`http://localhost:3001/api/items/${item.id}`);
        getAllItems();
    }

    const editTodoItem = async (item) => {
        console.log("inside editToDo")
        await axios.patch(`http://localhost:3001/api/items/${item.id}`, {content: item.content});
        getAllItems();
    }

    const createTodoItem = async (item) => {
        console.log("inside createToDo")
        await axios.post("http://localhost:3001/api/items", item);
        getAllItems();
    }

    function displayUpdateItem() {

    }
    return(
        <div>
            <span><h3>Your Too Items List</h3></span>
            <Items items={items}
                   handleCompletedItemChecked={handleCompletedItemChecked}
                   handleDeleteItem={handleDeleteItem}
                   editTodoItem={editTodoItem}
            />
            <TodoCreator
                items={items}
                createTodoItem={createTodoItem}/>
            {displayUpdateItem()}
        </div>
    )
}

export default App;

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             items:[] //populated fro API
//         }
//
//
//     }
//     componentDidMount = async () => {
//         await this.getTodoList();
//     }
//
//     getTodoList = async () => {
//         try {
//             const urlEmailsList = "http://localhost:3001/api/items";
//             const response = await fetch(urlEmailsList);
//             const responseJson = await response.json();
//             console.log(responseJson)
//
//             this.setState({
//                 items: responseJson
//             })
//         } catch (e) {
//             console.log(e);
//         }
//     }
//
//     updateItems = () =>{
//
//     }
// //Render will contain all logic of the app
//     render() {
//         return (
//             <div className="App">
//                 Welcome to Ammar's Todo List
//
//                 <TodoCreator
//                     updateItems={this.updateItems()}
//                 />
//                 <Items items={this.state.items}
//                 />
//
//
//             </div>
//         );
//     }
//
// }
//

// const url = "http://localhost:3001/api";
//
// export const getAllItems = async () => {
//     return await axios.get(url +"/items");
// }
//
// export const deleteItem = async () => {
//     return await axios.get(url +"/items");
// }
//
// import {getAllItems, deleteitem} from "myService.js";
