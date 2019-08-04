<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<Welcome />
		<button class="btn btn-primary" @click="addClicked = !addClicked">Add New</button>
		<Add v-if="addClicked" @cancelClicked="addClicked = !addClicked" @added="added" />
		<List />
	</div>
</template>

<script>
// @ is an alias to /src
import Welcome from "@/components/Welcome.vue";
import List from "@/components/Todo/List.vue";
import Add from "@/components/Todo/Add.vue";
export default {
	name: "home",
	data: function(){
		return{
			addClicked: false,
		}
	},
	components: {
		Welcome, List, Add
	},
	methods:{
		added: function(){
			this.$bvToast.toast('New Todo Added',{
				variant: 'success',
				autoHideDelay: 5000,
			});
			this.addClicked = !this.addClicked;
		},
	},
};
</script>
