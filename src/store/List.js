import Vue from 'vue'

let state = Vue.observable({
	users: []
})

let updateUsers = function(data) {
	state.users = [...data]
};

export default {
	state,
	updateUsers
}