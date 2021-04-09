import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from "react-router-dom"

const _nav =  [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  {
    _component: 'CNavTitle',
    anchor: 'Theme'
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Colors',
    to: '/theme/colors',
    icon: <CIcon name="cil-drop" customClasses="nav-icon"/>,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Typography',
    to: '/theme/typography',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon"/>,
  },
  {
    _component: 'CNavTitle',
    anchor: 'Components'
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Base',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon"/>,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Cards',
        to: '/base/cards',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Carousel',
        to: '/base/carousels',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Collapse',
        to: '/base/collapses',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Forms',
        to: '/base/forms',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Jumbotron',
        to: '/base/jumbotrons',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'List group',
        to: '/base/list-groups',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Navs',
        to: '/base/navs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Navbars',
        to: '/base/navbars',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pagination',
        to: '/base/paginations',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Popovers',
        to: '/base/popovers',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Progress',
        to: '/base/progress-bar',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tables',
        to: '/base/tables',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tabs',
        to: '/base/tabs',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Buttons',
    // route: '/buttons',
    icon: <CIcon name="cil-cursor" customClasses="nav-icon"/>,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Brand buttons',
        to: '/buttons/brand-buttons',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Dropdowns',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Charts',
    to: '/charts',
    icon: <CIcon name="cil-chart-pie" customClasses="nav-icon"/>
  },
  {
    _component: 'CNavGroup',
    anchor: 'Icons',
    // route: '/icons',
    icon: <CIcon name="cil-star" customClasses="nav-icon"/>,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Notifications',
    // route: '/notifications',
    icon: <CIcon name="cil-bell" customClasses="nav-icon"/>,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Badges',
        to: '/notifications/badges',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Modal',
        to: '/notifications/modals',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Toaster',
        to: '/notifications/toaster'
      }
    ]
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Widgets',
    to: '/widgets',
    icon: <CIcon name="cil-calculator" customClasses="nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  // {
  //   _component: 'CSidebarNavDivider'
  // },
  {
    _component: 'CNavTitle',
    anchor: 'Extras',
  },
  {
    _component: 'CNavGroup',
    anchor: 'Pages',
    icon: <CIcon name="cil-star" customClasses="nav-icon"/>,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Login',
        to: '/pages/login',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Register',
        to: '/pages/register',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 404',
        to: '/pages/404',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Error 500',
        to: '/pages/500',
      },
    ],
  },
  // {
  //   _component: 'CNavItem',
  //   anchor: 'Disabled',
  //   icon: <CIcon name="cil-ban" customClasses="nav-icon"/>,
  //   badge: {
  //     color: 'secondary',
  //     text: 'NEW',
  //   },
  //   addLinkClass: 'c-disabled',
  //   'disabled': true
  // },
  // {
  //   _component: 'CSidebarNavDivider',
  //   classanchor: 'm-2'
  // },
  // {
  //   _component: 'CNavTitle',
  //   items: ['Labels']
  // },
  // {
  //   _component: 'CNavItem',
  //   anchor: 'Label danger',
  //   to: '',
  //   icon: {
  //     anchor: <CIcon name="cil-star" customClasses="nav-icon"/>,
  //     classanchor: 'text-danger'
  //   },
  //   label: true
  // },
  // {
  //   _component: 'CNavItem',
  //   anchor: 'Label info',
  //   to: '',
  //   icon: {
  //     anchor: <CIcon name="cil-star" customClasses="nav-icon"/>,
  //     classanchor: 'text-info'
  //   },
  //   label: true
  // },
  // {
  //   _component: 'CNavItem',
  //   anchor: 'Label warning',
  //   to: '',
  //   icon: {
  //     anchor: <CIcon name="cil-star" customClasses="nav-icon"/>,
  //     classanchor: 'text-warning'
  //   },
  //   label: true
  // },
  // {
  //   _component: 'CSidebarNavDivider',
  //   classanchor: 'm-2'
  // }
]

export default _nav
