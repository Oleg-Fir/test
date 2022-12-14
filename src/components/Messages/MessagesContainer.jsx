import {addMessageAC, updateNewMessageTextAC} from "../../redux/messagesReducer";
import React from "react";
import Messages from "./Messages";
import { connect } from "react-redux";


// const MessagesContainer = (props) => {

//     let state = props.store.getState().messagesPage;

//     let addNewMessage = () => {
//         props.store.dispatch(addMessageAC());
//     }
//     let updateMessageText = (text) => {
//         props.store.dispatch(updateNewMessageTextAC(text));
//     }

//     return <Messages addMessage={addNewMessage} updateNewMessageText={updateMessageText} 
//     newMessageText={state.newMessageText} messagesData={state.messagesData} dialogsData={state.dialogsData}/>
// }

let mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        messagesData: state.messagesPage.messagesData,
        dialogsData: state.messagesPage.dialogsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => { 
           return dispatch(addMessageAC()) 
        },
        updateNewMessageText: (text) => {
            return dispatch(updateNewMessageTextAC(text)) 
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;