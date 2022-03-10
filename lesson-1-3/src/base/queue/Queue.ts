namespace Base {
	export namespace Data {
		export class Queue<T> implements Data.Queue<T> {
			protected storage: Array<T> = [];

			constructor() {}

			enqueue(...items: T[]): void {
				this.storage.push(...items);
			}

			dequeue(): T | undefined {
				return this.storage.shift();
			}

			size(): number {
				return this.storage.length;
			}
		}
	}
}

