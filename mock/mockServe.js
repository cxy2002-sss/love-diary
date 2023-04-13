import Mock from 'mockjs'
import test from './test.json'
Mock.mock('/mock/test',{code:200,data:test})

