export type TResolverFunction = (...args: Array<any>) => any

// TODO Реализовать scope.
//  На самом деле совсем не понятно как это сделать(

/**
 * Inversion Of Control Container.
 */
export default class IoC {
	private static dependencyMap: Map<string, TResolverFunction> = new Map()

	// TODO Выделить метод register() как отдельную зависимость IoC.Register.
	//  Только не ясно как это конкретно сделать, класс IoC то статический!

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