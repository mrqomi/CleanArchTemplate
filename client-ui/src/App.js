import './App.css';
import './Assets/assets/css/bootstrap.min.css'
import './Assets/assets/css/atlantis.min.css'
import './Assets/assets/css/demo.css'



function App() {
  return (
    <div className="wrapper">
      <div className="main-header">

        <div className="logo-header" data-background-color="blue">

          <a href="/" className="logo">

            <span className="text-white">سامانه مدیریت</span>
          </a>
          <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">
              <i className="icon-menu"></i>
            </span>
          </button>
          <button className="topbar-toggler more"><i className="icon-options-vertical"></i></button>
          <div className="nav-toggle">
            <button className="btn btn-toggle toggle-sidebar">
              <i className="icon-menu"></i>
            </button>
          </div>
        </div>

        <nav className="navbar navbar-header navbar-expand-lg" data-background-color="blue2">

          <div className="container-fluid">
            <div className="collapse" id="search-nav">
              <form className="navbar-left navbar-form nav-search mr-md-3">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <button type="submit" className="btn btn-search pr-1">
                      <i className="fa fa-search search-icon"></i>
                    </button>
                  </div>
                  <input type="text" placeholder="جستجو..." className="form-control rtl" />
                </div>
              </form>
            </div>
            <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
              <li className="nav-item toggle-nav-search hidden-caret">
                <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li className="nav-item dropdown hidden-caret">
                <a className="nav-link dropdown-toggle" href="#" id="messageDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="fa fa-bell"></i>
                  <span className="notification">0</span>
                </a>
                <ul className="rtl dropdown-menu messages-notif-box animated fadeIn" aria-labelledby="messageDropdown">
                  <li>
                    <div className="dropdown-title d-flex justify-content-between align-items-center">
                      شکایات بررسی نشده
                    </div>
                  </li>
                  <li>
                    1
                  </li>
                  <li>
                    <a className="see-all" href="#">مشاهده همه<i className="fa fa-angle-left"></i> </a>
                  </li>
                </ul>
              </li>



            </ul>
          </div>
        </nav>

      </div>
      <div className="sidebar sidebar-style-2">

        <div className="sidebar-wrapper scrollbar scrollbar-inner">
          <div className="sidebar-content">
            <div style={{ background: "#1C82AD !important" }}>
              <div className="user">

                <div className="avatar-sm float-right mr-2">
                  <img src="/assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>
                <div className="info">
                  <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                    <span>
                      ممد
                      <span className="user-level">سلام</span>
                      <span className="caret"></span>
                    </span>
                  </a>
                  <div className="clearfix"></div>

                  <div className="collapse in" id="collapseExample">
                    <ul className="nav">
                      <li>
                        <a href="#profile">
                          <span className="link-collapse">اطلاعات کاربری</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Users/ChangePass">
                          <span className="link-collapse">تغییر رمز عبور</span>
                        </a>
                      </li>
                      <li>
                        <a href="/Account/Logout">
                          <span className="link-collapse">خروج</span>
                        </a>
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
            <ul className="nav nav-primary">
              <li className="nav-item">
                <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                  <i className="fas fa-home"></i>
                  <p>Dashboard</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="dashboard">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="../demo1/index.html">
                        <span className="sub-item">Dashboard 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="../demo2/index.html">
                        <span className="sub-item">Dashboard 2</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-section">
                <span className="sidebar-mini-icon">
                  <i className="fa fa-ellipsis-h"></i>
                </span>
                <h4 className="text-section">Components</h4>
              </li>
              <li className="nav-item">
                <a data-toggle="collapse" href="#base">
                  <i className="fas fa-layer-group"></i>
                  <p>Base</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="base">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="components/avatars.html">
                        <span className="sub-item">Avatars</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/buttons.html">
                        <span className="sub-item">Buttons</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/gridsystem.html">
                        <span className="sub-item">Grid System</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/panels.html">
                        <span className="sub-item">Panels</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/notifications.html">
                        <span className="sub-item">Notifications</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/sweetalert.html">
                        <span className="sub-item">Sweet Alert</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/font-awesome-icons.html">
                        <span className="sub-item">Font Awesome Icons</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/simple-line-icons.html">
                        <span className="sub-item">Simple Line Icons</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/flaticons.html">
                        <span className="sub-item">Flaticons</span>
                      </a>
                    </li>
                    <li>
                      <a href="components/typography.html">
                        <span className="sub-item">Typography</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item active submenu">
                <a data-toggle="collapse" href="#sidebarLayouts">
                  <i className="fas fa-th-list"></i>
                  <p>Sidebar Layouts</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse show" id="sidebarLayouts">
                  <ul className="nav nav-collapse">
                    <li className="active">
                      <a href="sidebar-style-1.html">
                        <span className="sub-item">Sidebar Style 1</span>
                      </a>
                    </li>
                    <li>
                      <a href="overlay-sidebar.html">
                        <span className="sub-item">Overlay Sidebar</span>
                      </a>
                    </li>
                    <li>
                      <a href="compact-sidebar.html">
                        <span className="sub-item">Compact Sidebar</span>
                      </a>
                    </li>
                    <li>
                      <a href="static-sidebar.html">
                        <span className="sub-item">Static Sidebar</span>
                      </a>
                    </li>
                    <li>
                      <a href="icon-menu.html">
                        <span className="sub-item">Icon Menu</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-toggle="collapse" href="#forms">
                  <i className="fas fa-pen-square"></i>
                  <p>Forms</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="forms">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="forms/forms.html">
                        <span className="sub-item">Basic Form</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-toggle="collapse" href="#tables">
                  <i className="fas fa-table"></i>
                  <p>Tables</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="tables">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="tables/tables.html">
                        <span className="sub-item">Basic Table</span>
                      </a>
                    </li>
                    <li>
                      <a href="tables/datatables.html">
                        <span className="sub-item">Datatables</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-toggle="collapse" href="#maps">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Maps</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="maps">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="maps/jqvmap.html">
                        <span className="sub-item">JQVMap</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a data-toggle="collapse" href="#charts">
                  <i className="far fa-chart-bar"></i>
                  <p>Charts</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="charts">
                  <ul className="nav nav-collapse">
                    <li>
                      <a href="charts/charts.html">
                        <span className="sub-item">Chart Js</span>
                      </a>
                    </li>
                    <li>
                      <a href="charts/sparkline.html">
                        <span className="sub-item">Sparkline</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a href="widgets.html">
                  <i className="fas fa-desktop"></i>
                  <p>Widgets</p>
                  <span className="badge badge-success">4</span>
                </a>
              </li>
              <li className="nav-item">
                <a data-toggle="collapse" href="#submenu">
                  <i className="fas fa-bars"></i>
                  <p>Menu Levels</p>
                  <span className="caret"></span>
                </a>
                <div className="collapse" id="submenu">
                  <ul className="nav nav-collapse">
                    <li>
                      <a data-toggle="collapse" href="#subnav1">
                        <span className="sub-item">Level 1</span>
                        <span className="caret"></span>
                      </a>
                      <div className="collapse" id="subnav1">
                        <ul className="nav nav-collapse subnav">
                          <li>
                            <a href="#">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a data-toggle="collapse" href="#subnav2">
                        <span className="sub-item">Level 1</span>
                        <span className="caret"></span>
                      </a>
                      <div className="collapse" id="subnav2">
                        <ul className="nav nav-collapse subnav">
                          <li>
                            <a href="#">
                              <span className="sub-item">Level 2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a href="#">
                        <span className="sub-item">Level 1</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>




      <div className="main-panel">
        <div className="content">
          <div className="panel-header bg-primary-gradient">
            <div className="page-inner py-5">
              <div className="d-flex align-items-right align-items-md-center flex-column flex-md-row">
                <div>

                </div>
              </div>
            </div>
          </div>
          <div className="page-inner mt--5">

            <div className="row">
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-box-3 text-warning"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">مرکز فعال</p>
                          <h4 className="card-title">1000 مرکز </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body ">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-user text-success"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">پزشک فعال</p>
                          <h4 className="card-title">1000 نفر</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-customer-support text-danger"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">شکایت ثبت شده</p>
                          <h4 className="card-title">23</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-3">
                <div className="card card-stats card-round">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-5">
                        <div className="icon-big text-center">
                          <i className="flaticon-list text-primary"></i>
                        </div>
                      </div>
                      <div className="col-7 col-stats">
                        <div className="numbers">
                          <p className="card-category">پرونده الکترونیک</p>
                          <h4 className="card-title">1000</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">آمار شکایات ثبت شده</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">تاریخچه ورود</div>
                  </div>
                  <div className="card-body">
                    <div className="chart-container">

                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">آخرین تغییرات سیستم</div>
                  </div>
                  <div className="card-body">

                  </div>
                </div>
              </div>
            </div>





          </div>
        </div>
        <footer className="footer">
          <div className="container-fluid">

            <div className="copyright ml-auto">
              <a href="#">شرکت تراشه هوشمند نوین</a> &copy; 2022
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
