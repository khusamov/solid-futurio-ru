Исключения
==========

```typescript
const command = new Command
const resource: Resource = new Resource

try {
	command.execute()
} catch (error) {
	switch (error.type) {
		// switch здесь нарушение подстановки Лисков. Потому что типы может сколько угодно полявляться.
    }
}
```

Конструкцию try/catch можно использовать для освобождения ресурсов. Тут гарантированно не будет перечисления.

```typescript
const command = new Command
const resource: Resource = new Resource

try {
	command.execute()
	resource.close()
} catch (error) {
	resource.close()
}
```

Для упрощения можно создать interface IClosable и function using().

```typescript
interface IClosable { // Disposable
	close(): void
}

function using<T extends IClosable>(getResource: () => T, fn: (resource: T) => void) {
	const resource = getResource()
	try {
		fn()
		resource.close()
	} catch (error) {
		resource.close()
		throw error
	}
}

const command = new Command

using(() => new Resource, (
	resource => {
		command.execute()
	}
))
```

Или добавить подобный функционал в ресурсы.

```typescript
interface Usable {
	use(fn: (resource: this) => void): void
}

class Resource implements Usable {
	use(fn: (rc: this) => void) {
		try {
			fn()
			this.close()
		} catch (error) {
			this.close()
            throw error
		}
    }
}

const command = new Command
const resource: Resource = new Resource

rc.use(() => {
	command.execute()
})
```

Обработка ошибок на верхнем уровне:

```typescript
const command = new Command
try {
	command.execute()
} catch (error) {
	IoC.resolve('Обработка ошибки выполнения команды', command, error).handle()
}
```
