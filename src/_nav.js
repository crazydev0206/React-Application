import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Theme',
  },
  {
    component: 'CNavItem',
    name: 'Colors',
    to: '/theme/colors',
    icon: <CIcon name="cil-drop" customClassName="nav-icon" />,
  },
  {
    component: 'CNavItem',
    name: 'Typography',
    to: '/theme/typography',
    icon: <CIcon name="cil-pencil" customClassName="nav-icon" />,
  },
  {
    component: 'CNavTitle',
    name: 'Components',
  },
  {
    component: 'CNavGroup',
    name: 'Base',
    to: '/base',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',

        name: 'Accordion',
        to: '/base/accordion',
      },
      {
        component: 'CNavItem',

        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
      },
      {
        component: 'CNavItem',

        name: 'Cards',
        to: '/base/cards',
      },
      {
        component: 'CNavItem',

        name: 'Carousel',
        to: '/base/carousels',
      },
      {
        component: 'CNavItem',

        name: 'Collapse',
        to: '/base/collapses',
      },
      {
        component: 'CNavItem',

        name: 'List group',
        to: '/base/list-groups',
      },
      {
        component: 'CNavItem',

        name: 'Navs & Tabs',
        to: '/base/navs',
      },
      {
        component: 'CNavItem',

        name: 'Pagination',
        to: '/base/paginations',
      },
      {
        component: 'CNavItem',

        name: 'Popovers',
        to: '/base/popovers',
      },
      {
        component: 'CNavItem',

        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: 'CNavItem',

        name: 'Spinners',
        to: '/base/spinners',
      },
      {
        component: 'CNavItem',

        name: 'Tables',
        to: '/base/tables',
      },
      {
        component: 'CNavItem',

        name: 'Tooltips',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Buttons',
    icon: <CIcon name="cil-cursor" customClassName="nav-icon" />,
    items: [
      {
        component: 'CNavItem',

        name: 'Buttons',
        to: '/buttons/buttons',
      },
      {
        component: 'CNavItem',

        name: 'Buttons groups',
        to: '/buttons/button-groups',
      },
      {
        component: 'CNavItem',

        name: 'Dropdowns',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Forms',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
    items: [
      {
        component: 'CNavItem',

        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: 'CNavItem',

        name: 'Select',
        to: '/forms/select',
      },
      {
        component: 'CNavItem',

        name: 'Checks & Radios',
        to: '/forms/checks-radios',
      },
      {
        component: 'CNavItem',

        name: 'Range',
        to: '/forms/range',
      },
      {
        component: 'CNavItem',

        name: 'Input Group',
        to: '/forms/input-group',
      },
      {
        component: 'CNavItem',

        name: 'Floating Labels',
        to: '/forms/floating-labels',
      },
      {
        component: 'CNavItem',

        name: 'Layout',
        to: '/forms/layout',
      },
      {
        component: 'CNavItem',

        name: 'Validation',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Charts',
    to: '/charts',
    icon: <CIcon name="cil-chart-pie" customClassName="nav-icon" />,
  },
  {
    component: 'CNavGroup',
    name: 'Icons',
    icon: <CIcon name="cil-star" customClassName="nav-icon" />,
    items: [
      {
        component: 'CNavItem',

        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: 'CNavItem',

        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: 'CNavItem',

        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'Notifications',
    icon: <CIcon name="cil-bell" customClassName="nav-icon" />,
    items: [
      {
        component: 'CNavItem',

        name: 'Alerts',
        to: '/notifications/alerts',
      },
      {
        component: 'CNavItem',

        name: 'Badges',
        to: '/notifications/badges',
      },
      {
        component: 'CNavItem',

        name: 'Modal',
        to: '/notifications/modals',
      },
      {
        component: 'CNavItem',

        name: 'Toasts',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: 'CNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: <CIcon name="cil-calculator" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: 'CNavTitle',
    name: 'Extras',
  },
  {
    component: 'CNavGroup',
    name: 'Pages',
    icon: <CIcon name="cil-star" customClassName="nav-icon" />,
    items: [
      {
        component: 'CNavItem',

        name: 'Login',
        to: '/login',
      },
      {
        component: 'CNavItem',

        name: 'Register',
        to: '/register',
      },
      {
        component: 'CNavItem',

        name: 'Error 404',
        to: '/404',
      },
      {
        component: 'CNavItem',

        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
