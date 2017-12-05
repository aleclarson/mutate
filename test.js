#!/usr/bin/env tp

const {test} = require('testpass')

const mutate = require('.')

test('set the value of a key', (t) => {
  const obj = {a: {b: 1}}

  mutate(obj, 'a.b', 2)
  t.eq(obj.a.b, 2)
})

test('create 1+ objects if missing', (t) => {
  const obj = {}

  mutate(obj, 'a.b.c.d', 1)
  t.eq(obj, {a: {b: {c: {d: 1}}}})
})

test('overwrite existing non-object values', (t) => {
  const obj = {a: 1}

  mutate(obj, 'a.b', 2)
  t.eq(obj, {a: {b: 2}})
})
