import Header from './Header'
import dynamic from 'next/dynamic';

const DynamicComponentWithCustomLoading = dynamic(
  () => import('./hello'),
  { loading: () => <p>...</p> }
);

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    <DynamicComponentWithCustomLoading />
    {props.children}
  </div>
)

export default Layout