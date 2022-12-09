import { shallowMount } from '@vue/test-utils'
import Table from '@/components/Table.vue'

describe('Table.vue', () => {
  it('renders props.msg when passed', () => {
    const source = [
      {
        id: '1',
        text: 'hello',
      },
      {
        id: '1',
        text: 'friend',
      },
    ]
    const wrapper = shallowMount(Table, {
      props: { source },
    })
    expect(wrapper.text()).toMatch(source[0].text)
    expect(wrapper.text()).toMatch(source[1].text)
  })
})
