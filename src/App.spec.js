
import { shallow } from '@vue/test-utils'
/* import { mount } from '@vue/test-utils'
   O teste unitário tem que testar aquela unidade e nada mais, 
   quando utilizamos o mount do Vue test utils, ele monta o App e tudo que vem abaixo dele.
   O Vue test utils nos dá outro método shallow(raso), ele carrega apenas aquele componente e não seus filhos
*/
import App from './App'

describe('App', () => {
  test('é uma instância do Vue', () => {
    const wrapper = shallow(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
