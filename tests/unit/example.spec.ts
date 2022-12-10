import { mount } from '@vue/test-utils'
import Table from '@/components/table/Table.vue'

jest.mock('@iconify-prerendered/vue-lucide', () => ({
  FontAwesomeIcon: '',
}))
jest.mock('@iconify-prerendered/vue-material-symbols', () => ({
  FontAwesomeIcon: '',
}))

describe('Table.vue', () => {
  it('renders props.msg when passed', () => {
    const source = [
      {
        id: '1',
        text: 'hello',
      },
      {
        id: '3',
        text: 'friend',
      },
    ]
    const title = 'test'
    const wrapper = mount(Table, {
      props: { source, title },
    })
    expect(wrapper.text()).toMatch(new RegExp(`${title}`, 'i'))
    expect(wrapper.text()).toMatch(new RegExp(`${source[0].text}`, 'i'))
    expect(wrapper.text()).toMatch(new RegExp(`${source[1].text}`, 'i'))
  })
})
