<template>
	<ul>
		<li v-for="user in users">
			{{ user.name }}
		</li>

		<pre><code>{{Store.state}}</code></pre>
	</ul>
</template>

<script>
	export default {
		inject: ['Store'],
		computed: {
			users() {
				return Object.freeze(this.Store.state).users;
			}
		},
		created() {
			setTimeout(() => {
				console.log({...this.Store.state});
				console.log(this.users);
				this.users = this.users.map((u, i) => {
					if (i === 0) {
						u.name = 123
					}

					return u
				})
			}, 2000)
		}
	}
</script>