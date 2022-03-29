Домашнее задание 1-6
====================

Исправление ошибок из lesson-1-3.

Проблемы с рефлексией в TypeScript
----------------------------------

Может кто подскажет доделанную библиотеку Reflection для TypeScript?

Я попробовал https://github.com/typescript-rtti/typescript-rtti
Но она не доработана. Например нельзя получить метаинформацию у интерфейсов, 
которые были импортированы при помощи оператора import из файла. 
Также не поддерживается такой синтаксис определения массива 
как string[] (можно только Array<string>)

Также попробовал https://github.com/Hookyns/tst-reflect 
Но она не работает на Parcel (там нужно дорабатывать трансформер для Parcel, 
а авторы трасформера его не поддерживают).

Для обеих систем требуется
https://www.npmjs.com/package/parcel-transformer-ttypescript
```
yarn add -D parcel-transformer-ttypescript @parcel/ts-utils 
```