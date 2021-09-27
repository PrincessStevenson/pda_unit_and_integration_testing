import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    // const counter = container.find("#counter");
    // const button1 = container.find("#number1");
    // const runningTotal = container.find('#running-total');
    // button1.simulate('click');
    // expect(runningTotal.text()).toEqual('4');
    // expect(counter.text()).toEqual('5');


    // const [number1, setNumber1] = useState(1);
    // const [number4, setNumber2] = useState(4);
    // const [total, setTotal] = useState(number1 + number2);
      // return (5)

      // const button1 = container.find('#number1');
      // const runningTotal = container.find('#running-total');
      // button1.simulate('click');
      // expect(runningTotal.text()).toEqual('1');
      // const button.add = calculator.add

      const button4 = container.find('#number4');
      const button1 = container.find('#number1');
      const buttonAdd = container.find('#operator_add');
      const buttonEquals = container.find('#operator_equals');

      button4.simulate('click');
      buttonAdd.simulate('click');
      

  })
})

