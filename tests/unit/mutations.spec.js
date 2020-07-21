import { expect } from 'chai'
import { mutations } from '.././../src/store'
import Home from '.././../src/components/Home.vue'
import Donation from '.././../src/components/Donation.vue'


const { incrementGlobalCounter } = mutations

describe('mutations', () => {
  it('Le compteur global est bien incrémenté', () => {
    // mock state
    const state = { global_count: 0 }
    // apply mutation
    incrementGlobalCounter(state)
    // assert result
    expect(state.global_count).to.equal(1)
  }),
  it('Home a le hook `created`', () => {
    expect(typeof Home.created).equal('undefined')
  }),
  it('Home.state ne contient pas de données par défaut', () => {
    expect(typeof Home.data).equal('function')
    const defaultData = Home.data()
    expect(defaultData.message).equal(undefined)
  }),
  it('Donation a le hook `created`', () => {
    expect(typeof Donation.created).equal('function')
  }),
  it('Donation.state ne contient pas de données par défaut', () => {
    expect(typeof Donation.data).equal('function')
    const defaultData = Donation.data()
    expect(defaultData.message).equal(undefined)
  })
})


