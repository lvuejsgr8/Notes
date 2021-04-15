First Install node js

npm install -g @vue/cli
check cli version:
vue --version

Now Create Project
vue create blog
Or
vue init webpack myproject
choose default option

npm run serve


What Is component:-
component is pice of code, its reusable like header,sidebar

how to create component
goto  src->components and cerate file like Home.vue
Home.vue
<template>
	<h1>Hello Frome Home Component</h1>
</template>
<script>
export default {
	name: 'Home'
}
</script>


Now go to App.vue
<script>
import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'  //import Home component by me
export default {
  name: 'App',
  components: {
    HelloWorld,
    Home //its my Home component
  }
}
</script>


<template>
<Home /> 
</template>


How to data pass by component:-
App.vue
<Home data="Suman Here"/>
Now goto Home.vue 
template ke under root component ek hi hota hai.
go to Home.vue
and export
<script>
export default {
	name: 'Home',
	props:{
		data:String
	}
}
</script>

=============================================================

How to use Event In vue js : -5
App.vue
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Home data="Suman Here"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>


Home.vue
<template>
	<div>
		<h1>Hello Frome Home Component</h1>
		<button v-on:click="hello">Click</button>
	</div>
</template>
<script>
export default {
	name: 'Home',
	props:{
		data:String
	},
	methods:{
		hello()
		{
			alert("This Is Click Event")
		}
	}
}
</script>

======================================================
video :-6
data function vue js me propert define karta hai
How to use If directive:-
Home.vue
<template>
	<div>
		<h1 v-if="show">Hello If Directive</h1>
		<h1 v-else>This Is Else Part</h1>
	</div>
</template>
<script>
export default {
	name: 'Home',
	props:{
		data:String
	},data()
	{
		return {show:false}
	}
	
}
</script>


Hide an show:-
Home.vue
<template>
	<div>
		<h1 v-if="show">Hello Suman</h1>
		<button v-on:click="display">Hide/Show</button>
	</div>
</template>
<script>
export default {
	name: 'Home',
	props:{
		data:String
	},data()
	{
		return {show:false}
	},
	methods:{
		display()
		{
			this.show=!this.show
		}
	}
	
}
</script>
=============================================================
How to use foorl loop in vue js :- 7
directive template ke under modification,update ke liye use karte hai
Home.vue
<template>
	<div>
		<h1>Foor loop In vue js</h1>
		<table>
			<tr>
				<td>Id</td>
				<td>Name</td>
				<td>Email</td>
			</tr>
			<tr v-for="item in users" :key="item.id">
				<td>{{item.id}}</td>
				<td>{{item.name}}</td>
				<td>{{item.email}}</td>
			</tr>
		</table>
	</div>
</template>
<script>
export default {
	name: 'Home',
	data()
	{
		return {
			users:[
				{id:1,name:'peeter',email:'peeter@test.com'},
				{id:2,name:'Ram',email:'ram@test.com'},
				{id:3,name:'Kishu',email:'kishu@test.com'},
				{id:4,name:'aashu',email:'aashu@test.com'}
			]
		}
	}
	
}
</script>
==========================================================



