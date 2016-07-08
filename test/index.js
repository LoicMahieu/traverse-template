/*global describe, it*/

const expect = require('chai').expect
const traverseTemplate = require('..')

describe('traverse-template', function () {
  it('works', function () {
    expect(
      traverseTemplate({
        vars: {
          foo: 1,
          nested: {
            bar: 2
          }
        },
        foo: '${vars.foo} !',
        arr: [
          {
            foo: '${vars.foo}',
            bar: [
              '${vars.nested.bar}'
            ]
          },
          '${vars.foo}'
        ]
      })
    ).to.deep.equal({
      vars: {
        foo: 1,
        nested: {
          bar: 2
        }
      },
      foo: '1 !',
      arr: [
        {
          foo: '1',
          bar: [
            '2'
          ]
        },
        '1'
      ]
    })
  })

  it('works with given locals', function () {
    expect(
      traverseTemplate({
        foo: '${vars.foo} !',
        arr: [
          {
            foo: '${vars.foo}',
            bar: [
              '${vars.nested.bar}'
            ]
          },
          '${vars.foo}'
        ]
      }, {
        vars: {
          foo: 1,
          nested: {
            bar: 2
          }
        }
      })
    ).to.deep.equal({
      foo: '1 !',
      arr: [
        {
          foo: '1',
          bar: [
            '2'
          ]
        },
        '1'
      ]
    })
  })
})
