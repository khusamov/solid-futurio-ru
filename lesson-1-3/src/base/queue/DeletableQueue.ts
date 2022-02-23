namespace Base {
	export namespace Data {
		export class DeletableQueue<T> extends Data.Queue<T> {
			delete<S extends T>(predicate: (value: T, index: number, array: T[]) => value is S, thisArg?: any) {
				const deletableItems = this.storage.filter(predicate, thisArg)
				const deletableItemIndexes = deletableItems.map(deletableItem => this.storage.indexOf(deletableItem))
				for (const deletableItemIndex of deletableItemIndexes) {
					delete this.storage[deletableItemIndex]
				}
			}
		}
	}
}