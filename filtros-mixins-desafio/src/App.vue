<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<input type="text" v-model="texto"> <button @click="texto = 'Construir um filtro local que troca espaços por vírgula'">Default</button>
		<button @click="texto = ''">Limpar</button>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<p>{{texto | filtroVirgula}}</p>
		

		<hr>

		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<p>{{texto | filtroTamanho}}</p>



		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<hr>

		<p>{{computadaVirgula}}</p>
		<hr>
		<p>{{computadaPalavra}}</p>

		<hr>

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->

		<p>{{mixinVirgula}}</p>
		<hr>
		<p>{{mixinPalavra}}</p>
	</div>
</template>

<script>
export default {
	filters: {
		filtroVirgula(value) {
			const arr = value.split("")
			arr.forEach((item, index) => {
				if (item === ' ') {
					arr.splice(index, 1, ",")
				}
			});
			return arr.join('')
		}
	},
	computed: {
		computadaVirgula() {
			const arr = this.texto.split("")
			arr.forEach((item, index) => {
				if (item === ' ') {
					arr.splice(index, 1, ",")
				}
			});
			return arr.join('')
		},
		computadaPalavra() {
			return this.texto.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	},
	data() {
		return {
			texto: 'Construir um filtro local que troca espaços por vírgula'
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}

input {
	font-size: 2.5rem;
}
</style>
