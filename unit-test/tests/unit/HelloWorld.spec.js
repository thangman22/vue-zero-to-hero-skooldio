import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

import Vuex from 'vux'
const localVue = createLocalVue()
localVue.use(Vuex)

// const $route = {
//   path: '/',
//   hash: '',
//   params: { id: '123' },
//   query: { q: 'hello' }
// }

const $store = {
  state:  {
    count: 0
  }
}

const store = Vuex.store({
  actions:{
    actionClick: jest.fn()
  },
  mutations: {
    mutate (state) {
      state.count = 20
    }
  },
  state: {
    count: 0
  }
})

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue: localVue,
      mocks:{
        $store
      },
      store: store
    })

    wrapper.vm.mutate()
    //wrapper.find('button').trigger('click')
    expect(wrapper.vm.count).toBe(20)
    expect(wrapper.vm.count).toBe(20)
  })
})
