
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from './containers/Layout'
import BaseRouter from './containers/routes';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
    </div>
  );
}

export default App;
