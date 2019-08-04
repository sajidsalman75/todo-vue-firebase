<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper row">
                <div class="modal-container col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <form @submit="submitClicked">
                                <h3>Edit</h3>
                                <div class="row">
                                    <div class="form-group col">
                                        <input type="text" v-model="todo.title" class="form-control" placeholder="Title" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="form-group text-right col">
                                        <button type="submit" class="btn btn-success">Submit</button> &nbsp;
                                        <button type="button" class="btn btn-danger" @click="cancelClicked">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import {todosRef} from "../../firebase";

export default {
    name: "Edit",
    props: ['todo'],
    data: function(){
        return{
            updatedTodo: {},
        }
    },
	methods:{
		submitClicked: function(e){
            e.preventDefault();
            todosRef.child(this.todo['.key']).update(updatedTodo);
			this.$emit('submitClicked');
		},
		cancelClicked: function(){
			this.$emit('cancelClicked');
        },
    },
    mounted(){
        this.updatedTodo = new Object();
        this.updatedTodo = this.todo;
    }
};
</script>