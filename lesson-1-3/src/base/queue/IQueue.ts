namespace Base {
	export namespace Data {
		export interface IQueue<T> {
			enqueue(item: T): void;
			dequeue(): T | undefined;
			size(): number;
		}
	}
}

