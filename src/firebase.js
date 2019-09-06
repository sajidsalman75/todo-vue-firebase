import firebase from "firebase";

const config = {
    apiKey: "AIzaSyAl2k9Evp4lgrE-rZmO7xOZjawRvzeQktE",
    authDomain: "todo-ddacf.firebaseapp.com",
    databaseURL: "https://todo-ddacf.firebaseio.com",
    projectId: "todo-ddacf",
    storageBucket: "",
    messagingSenderId: "564143229093",
    appId: "1:564143229093:web:4f4976568102e04e"
};
firebase.initializeApp(config);
export const db = firebase.database();
export const todosRef = db.ref('todos');