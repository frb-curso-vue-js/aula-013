import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* Vue.filter('filtroTamanho', function(value) {
		const arr = value.split(" ")
		arr.forEach((palavra, index) => {
			console.log("Palavra: " + palavra + " | Tamanho: " + palavra.length + " | Indice: " + index)
			arr.splice(index+arr.length, 0, "(" + palavra.length + ")")
		});
		return arr.join(" ")
	}
) */

Vue.filter('filtroTamanho', function(value) {
	return value.split(' ').map(p => `${p} (${p.length})`).join(' ')
})

Vue.mixin({
	computed: {
		mixinVirgula() {
			const texto = 'Construir um filtro local que troca espaços por vírgula'
			const arr = texto.split("")
			arr.forEach((item, index) => {
				if (item === ' ') {
					arr.splice(index, 1, ",")
				}
			});
			return arr.join('')
		},
		mixinPalavra() {
			const texto = 'Construir um filtro local que troca espaços por vírgula'
			return texto.split(' ').map(p => `${p} (${p.length})`).join(' ')
		}
	}
})

new Vue({
	render: h => h(App),
}).$mount('#app')
