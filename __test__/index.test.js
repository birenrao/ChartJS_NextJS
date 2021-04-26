import React from 'react'
import renderer from 'react-test-renderer'
import ShallowRenderer from 'react-test-renderer/shallow';

import Index from '../pages/index'

let  dataViz;
beforeEach(() => {
     dataViz={"current": {
        "data": {
        "TK1": {
            "TK1_Underflow_Percent_Solids": {
                "times": [
                0,
                5,
                15,
                25,
                35,
                45,
                55
                ],
                "values": [
                46.3985645586,
                45.8695203419,
                45.9801895469,
                46.1076254494,
                45.8455260615,
                46.2302730406,
                46.0301647872
                ]
                },
            "TK1_Underflow_Flow_Rate": {
                "times": [
                0,
                5,
                15,
                25,
                35,
                45,
                55
                ],
                "values": [
                4.5714630573,
                4.6109135151,
                4.6985812187,
                4.7467985153,
                4.7467985153,
                4.7467985153,
                4.7467985153
                ],
                "direct": 4.6109135151,
                "min": null,
                "max": null
                }
           }
        }
    }
  }
});


it('renders index unchanged', () => {
    const renderer = new ShallowRenderer();
    renderer.render(<Index dataViz={dataViz}/>);
    const result = renderer.getRenderOutput();
  expect(result).toMatchSnapshot()
})