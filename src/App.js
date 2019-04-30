import React, { Component, Suspense } from 'react';
//import logo from './logo.svg';
//import './App.css';
import Form from './components/Form';
import Container_Composite from './components/Container_Composite';
import ChannelData from './components/ChannelData';
import chdata from './components/jsonData'
import './mycss.css';
import Menu from './components/Menu';
import Memo from './Memo';
import InputPage from './components/InputPage';
import FormJoi from './components/FormJoi';
import RenderPropsParent from './components/parent/RenderPropsParent';
import Form_Practice from './components/Form1';
import RenderProps from './components/RenderProps';
import RenderProps_Render from './components/RenderProps_Render';
import CompositComponent from './components/CompositComponet';
import ChildA from './components/Child/ChildA';
import Redux from './Redux';
import PureComp from './PureComp';
import Rtest from './Rtest';
const LazyLoading = React.lazy(() => import("./lazy"));


//import Lazy from './lazy';
class App extends Component {

  state = {
    val: ''
  }
  btnClickEvent = (e) => {
    this.setState({ val: e })
    //console.log(e);
  }
  render() {
    return (
      <>
        {/* <Form/>
      <Container_Composite>
        <Container_Composite.XYZ />
        <Container_Composite.XYZ1 />
      </Container_Composite> */}
        {/* <ChannelData chdata={chdata}/> */}
        {/* <Menu /> */}
        {/*
        <Memo />
        {this.state.val !== '' && (
          <Suspense fallback={<div>Loading....</div>}>
            <LazyLoading />
          </Suspense>)
        }
        <FormJoi /> */}
        {/* <RenderPropsParent>
          {
            data => data.ChildD
          }
        </RenderPropsParent> */}
        {/* <Form_Practice /> */}
        {/* <InputPage btnClickEvent={(e) => this.btnClickEvent(e)} /> */}
        {/* <RenderProps>
          {
            ({ A, B }) => <>
              <A />
              <B />
            </>
          }
        </RenderProps>
        <RenderProps_Render render={({ B, A, C }) =>
          <>
            <h6>testing by deep</h6>
            <B />
            <A />
            {C}
          </>
        } /> */}

        {/* <CompositComponent>
          <CompositComponent.A itemProps="Dee" />
          <CompositComponent.B />
        </CompositComponent> */}
        {/* <Redux /> */}
        {/* <PureComp /> */}
        <Rtest />
      </>
    );
  }
}

export default App;
