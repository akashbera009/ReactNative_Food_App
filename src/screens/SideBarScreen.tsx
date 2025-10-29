import React from 'react'
import SideBar from '../components/SideBar/SideBar';

import { DrawerContentComponentProps } from '@react-navigation/drawer';

const SideBarScreen = ({ navigation }: DrawerContentComponentProps) => {
  return (
   <SideBar/>
  )
}

export default SideBarScreen