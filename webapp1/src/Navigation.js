import logo from './logo.svg';
import './App.css';

function Navigation() {
  return (
    <div className="navigation">
      <header className="navigation-header">


      <div data-role="appbar" data-expand-point="md">
      <a href="#" class="brand no-hover">
          <span  class="p-2 border bd-dark border-radius">
              BlueNest<sup>Soft</sup>
          </span>
      </a>

      <ul class="app-bar-menu">
          <li><a href="#">Home</a></li>
          <li>
              <a href="#" class="dropdown-toggle">Libraries</a>
              <ul class="d-menu" data-role="dropdown">
                  <li><a href="https://grafana.com/docs/grafana/latest/">Grafana Library</a></li>
                  <li><a href="https://prometheus.io/docs/prometheus/latest/getting_started/">Prometheus Library</a></li>
                  <li><a href="https://signoz.io/docs/">SigNoz Library</a></li>
                  <li><a href="https://www.jenkins.io/doc/">Automation Jenkins Library</a></li>

              </ul>
          </li>
          <li><a href="https://www.linkedin.com/company/bluenest-soft/">Blog</a></li>
          <li><a href="#">Contacts</a></li>
      </ul>
  </div>



      </header>
    </div>
  );
}

export default Navigation;
