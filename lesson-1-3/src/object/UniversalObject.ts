namespace Game {
	export class UniversalObject {
		#map: Map<string, any> = new Map

		public delete(name: string) {
			if (!this.#map.has(name)) {
				throw new Error(`Не найден ключ ${name}`)
			}

			this.#map.delete(name)
		}

		public setValue(name: string, value: any) {
			if (!this.#map.has(name)) {
				throw new Error(`Не найден ключ ${name}`)
			}

			this.#map.set(name, value)
		}

		public getValue<T>(name: string): T {
			if (!this.#map.has(name)) {
				throw new Error(`Не найден ключ ${name}`)
			}

			return this.#map.get(name)
		}
	}
}