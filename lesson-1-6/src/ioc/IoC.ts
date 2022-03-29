export type TResolverFunction = (...args: Array<any>) => any

/**
 * Inversion Of Control Container.
 */
export default class IoC {
	private static dependencyMap: Map<string, TResolverFunction> = new Map()

	static register(dependencyName: string, resolver: TResolverFunction) {
		this.dependencyMap.set(dependencyName, resolver)
	}

	static resolve<T>(dependencyName: string, ...args: Array<any>): T {
		const resolver = this.dependencyMap.get(dependencyName)
		if (!resolver) {
			throw new Error(`Не найдена зависимость '${dependencyName}'`)
		}
		return resolver(...args)
	}
}