import { useState } from "react";
import ComponentLife from "./06.componentLife/ComponentLife";

function App() {
  // const propsObj = {
  //   name:'xander',
  //   age:'18',
  //   gender:'男'
  // }

  // 测试propsObj属性改变，会不会影响页面刷新 no!
  // useEffect(() => {
  //   setTimeout(() => {
  //     propsObj.name = 'holden'
  //   },2000)
  // }, [])

  const [title, setTitle] = useState('life')

  // 强制给子组件传一次不一样的参数
  function forceUpdate() {
    setTitle(title+'!')
  }

  return (
    <div className="App" onClick={forceUpdate}>
      App
      {/* <MyComponent /> */}
      {/* <Weather /> */}
      {/* <MyList {...propsObj}/> */}
      {/* <MyInput /> */}
      <ComponentLife title={title} />
    </div>
  );
}

export default App;
