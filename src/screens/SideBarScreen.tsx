import React from 'react'

// component imports
import SideBar from '../components/SideBar/SideBar';

// navigation imorts 
import { DrawerContentComponentProps } from '@react-navigation/drawer';

const SideBarScreen = ({ navigation }: DrawerContentComponentProps) => {
  return (
   <SideBar/>
  )
}

export default SideBarScreen  