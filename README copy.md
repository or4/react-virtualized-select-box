# react-simpple-virtualized-select-box

## About

Inspired react-virtualized I create this select box. It is very fast for big data and very simple and small.

It has only two dependencies, there are react and react-dom.

You can custom it how you needed.

## Install

npm install react-simpple-virtualized-select-box@latest

## Using

Simple use

```jsx
<SelectBox onSelected={console.log} data={[{ id: 1, value: 'test' }]} />
```

You can use follow props

```js
itemHeight: number; // height of item in popup
showItemsCount: number; // count visible items in popup
mix: string; // mix class for main container
popupMix: string; // mix class for popup container
id: string; // id for popup
```
