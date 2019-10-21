import React,{Component} from 'react';

import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
  static contextType = UserContext;

  render() {
    return(
        <div>
          Component E Context: {this.context}
          <ComponentF/>
        </div>
    );
  }
}

// ComponentE.contextType = UserContext;   //this is second way to declare the context without static 

export default ComponentE;

//This Context User there are two limitaion 
// 1. it's only works on class component 
// 2. when used only single context thats time is used this way other wise used consumer context