import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBuilding,
  cilUser,
  cilApps,
  cilSpeedometer,
  cilInfo
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'


//Admin Navigation
const admin_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    
  },

  {
    component:CNavItem,
    name:"Manage Leads",
    to:"/manage-leads",
    icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  },
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
{
  component: CNavTitle,
  // name: 'Company Panel',
},  
{
    component: CNavGroup,
    name: 'Company Panel',
    to: '/company-panel',
    icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Active',
        to: '/company-panel',
        icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,

        name: 'Pending',
        to: '#',
        icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
      },
      {
        component: CNavItem,

        name: 'Deactive',
        to: '/company-panel/deactive',
        icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
      },

    ],
  },

//User Panel
  {
    component: CNavTitle,
    // name: 'User Panel',
  },
  {
    component: CNavGroup,
    name: 'User Panel',
    to: '/user-panel',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'All Users',
        to: '/user-panel',
      },
      {
        component: CNavItem,
        name: 'New View Users',
        to: '/user-panel/Example',
      },
      
    ],
  },


  //More Panel
  {
    component: CNavTitle,
    // name: 'More',
  },
  {
    component: CNavGroup,
    name: 'More',
    to: '/pid-panel',
    icon: <CIcon icon={cilInfo} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Admin PID Plans',
        to: '/pid-panel',
      },
      {
        component: CNavItem,
        name: 'AID',
        to: '/aid-panel',
      },
      
    ],
  },

  
]


//Affiliate Navigation
const affiliate_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/affiliate/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    
  },
  {
    component:CNavItem,
    name:"My Links",
    to:"/affiliate/my-links",
    icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  },
  // {
  //   component:CNavItem,
  //   name:"Reports",
  //   to:"/affiliate/reports",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Referral Reports",
  //   to:"/affiliate/referral-reports",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Member Retention",
  //   to:"/affiliate/member-retention",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Suspended Members",
  //   to:"/affiliate/suspended-members",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Bank Details",
  //   to:"/affiliate/bank-details",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Co-branding",
  //   to:"/affiliate/co-brand",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  {
    component:CNavItem,
    name:"Referral Program",
    to:"/affiliate/referral-program",
    icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  },
  // {
  //   component:CNavItem,
  //   name:"User Panel",
  //   to:"/affiliate/user-panel",
  //   icon:<CIcon icon={cilUser} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Credit Snapshot",
  //   to:"/affiliate/credit-snapshot",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Bank Details",
  //   to:"/affiliate/my-bank-details",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // }
  // {
  //   component:CNavItem,
  //   name:"My Leads",
  //   to:"/affiliate/my-leads",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"Commission Summary",
  //   to:"/affiliate/my-leads",
  //   icon:<CIcon icon={cilApps} customClassName="nav-icon"/>
  // },
  // {
  //   component:CNavItem,
  //   name:"My Profile",
  //   to:"/affiliate/my-profile",
  //   icon:<CIcon icon={cilUser} customClassName="nav-icon"/>
  // }
]


//Affiliate User Navigation
const affiliate_user_nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/affiliate-user/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />
  },

]

export {admin_nav,affiliate_nav,affiliate_user_nav}
