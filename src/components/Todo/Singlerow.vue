<template>
    <tr>
        <td v-if="!isEditClicked">{{todo.title}}</td>
		<td v-else>
			<input type="text" v-model="newValue" class="form-control" />
			<button class="btn btn-sm btn-success" @click="updateClicked">Update</button> &nbsp;
			<button class="btn btn-sm btn-danger" @click="cancelClicked">Cancel</button>
		</td>
		<td>{{todo.status}}</td>
		<td>
			<button v-if="todo.status == 'Pending'" class="btn btn-success btn-sm" @click="completedClicked">Completed</button> &nbsp;
			<button v-if="todo.status == 'Completed'" class="btn btn-secondary btn-sm" @click="pendingClicked">Pending</button> &nbsp;
			<button class="btn btn-warning btn-sm" @click="editClicked">Edit</button> &nbsp;
			<button class="btn btn-danger btn-sm" @click="deleteClicked">Delete</button>
		</td>
    </tr>
</template>

<script>
import { todosRef } from '../../firebase';
export default {
	name: "SingleRow",
	data: function(){
		return{
			isEditClicked: false,
			oldValue: this.todo.title,
			newValue: this.todo.title,
		}
	},
	props: ['todo', 'index'],
	methods:{
		editClicked: function(){
			this.isEditClicked = !this.isEditClicked;
			//this.$emit('editClicked', this.index, this.todo['.key']);
		},
		updateClicked: function(){
			todosRef.child(this.todo['.key']).update({title: this.newValue});
			this.$bvToast.toast(`Updated`, {
				variant: 'success',
				autoHideDelay: 5000,
			})
			this.isEditClicked = !this.isEditClicked;
		},
		cancelClicked: function(){
			this.todo.title = this.oldValue;
			this.newValue = this.oldValue;
			this.isEditClicked = !this.isEditClicked;
		},
		pendingClicked: function(){
			todosRef.child(this.todo['.key']).update({status: 'Pending'});
			this.$bvToast.toast('Status changed from `Completed` to `Pending`.',{
				title: 'Status Changed',
				variant: 'success',
				autoHideDelay: 5000,
			})
		},
		completedClicked: function(){
			todosRef.child(this.todo['.key']).update({status: 'Completed'});
			this.$bvToast.toast('Status changed from `Pending` to `Completed`.',{
				title: 'Status Changed',
				variant: 'success',
				autoHideDelay: 5000,
			})
		},
		deleteClicked: function(){
			this.$emit('deleteClicked', this.index, this.todo['.key']);
			this.$bvToast.toast('Deleted',{
				variant: 'success',
				autoHideDelay: 5000,
			})
		}
	}
};
</script>