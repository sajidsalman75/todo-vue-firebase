<template>
    <div class="row">
        <Edit v-if="isEditClicked" @cancelClicked="isEditClicked = !isEditClicked" :todo="selectedTodo" />
        <div class="col-md-12">
            <b-tabs content-class="mt-3">
                <b-tab title="All" active>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Control Section</th>
                            </tr>
                        </thead>
                        <tbody>
                            <SingleRow v-for="(todo, index) in todos" :todo="todo" :index="index" v-bind:key="index" @editClicked="editClicked" @deleteClicked="deleteClicked" />
                        </tbody>
                    </table>
                </b-tab>
                <b-tab title="Pending">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Control Section</th>
                            </tr>
                        </thead>
                        <tbody>
                            <SingleRow v-for="(todo, index) in pendings" :todo="todo" :index="index" v-bind:key="index" />
                        </tbody>
                    </table>
                </b-tab>
                <b-tab title="Completed">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Control Section</th>
                            </tr>
                        </thead>
                        <tbody>
                            <SingleRow v-for="(todo, index) in completed" :todo="todo" :index="index" v-bind:key="index" />
                        </tbody>
                    </table>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import SingleRow from "./Singlerow";
import Edit from "./Edit";
import {todosRef, db} from "../../firebase";

export default {
    name: "List",
    data: function(){
        return{
            isEditClicked: false,
            selectedTodo: {},
            todos: [],
            pendings: [],
            keys: [],
            completed: [],
        }
    },
    components: {
        SingleRow, Edit
    },
    firebase:{
        todos: todosRef,
        pendings: todosRef.orderByChild('status').equalTo('Pending'),
        completed: todosRef.orderByChild('status').equalTo('Completed'),
    },
    methods:{
        editClicked: function(index, key){
            this.isEditClicked = !this.isEditClicked;
            this.selectedTodo = this.todos[index];
        },
        deleteClicked: function(index, key){
            todosRef.child(key).remove();
        },
    },
    mounted(){
        
    }
};
</script>