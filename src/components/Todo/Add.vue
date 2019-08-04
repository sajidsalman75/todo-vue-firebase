<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper row">
                <div class="modal-container col-md-4">
                    <div class="row">
                        <div class="col-md-12">
                            <form @submit="submitClicked">
                                <h3>Add New</h3>
                                <div class="row">
                                    <div class="form-group col">
                                        <input type="text" v-model="title" class="form-control" placeholder="Title" required />
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
    name: "Add",
    data: function(){
        return{
            title: '',
        }
    },
	methods:{
		submitClicked: function(e){
            e.preventDefault();
            todosRef.push({
                title: this.title,
                status: 'Pending',
            });
			this.$emit('added');
		},
		cancelClicked: function(){
			this.$emit('cancelClicked');
		}
	}
};
</script>