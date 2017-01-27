import test from 'ava'
import Data from '../data/data'
import mock from '../data/mock'

const dbHandler = new Data()

test('Should have no users', async (t) => {
  await dbHandler.deleteData()
  t.is(await dbHandler.getAllUsers().length, 0)
})

test('Should have 12 users', async t => {
  await dbHandler.insertUserList(mock)
  t.is(dbHandler.getAllUsers().length, 12)
})

test('Should return a user with id 1', t => {
  t.is(dbHandler.getUserById(1).id, 1)
})

test('Should return a user with id 10', t => {
  t.is(dbHandler.getUserById(10).id, 10)
})

test(`Should return null if id doesn't exist`, t => {
  t.is(dbHandler.getUserById(10000), null)
})
