import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';



export function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar/>
    </div>
  )
}