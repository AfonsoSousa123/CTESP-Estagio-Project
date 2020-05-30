import React from 'react'

// Imported Components
import Sidebar from "./Sidebar";
import Watch from './components/Watch';

// Imported Icons
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import WatchIcon from '@material-ui/icons/Watch';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import TimerIcon from '@material-ui/icons/Timer';

function onClick(e, item) {
  window.alert("click " + item.name);
}

const items = [
  {
    name: "billing",
    label: "Watch Types",
    Icon: WatchLaterIcon,
    items: [
      { name: "digital", label: "Digital", onClick },
      { name: "analog", label: "Analog", onClick }
    ]
  },
  "divider",
  {
    name: "settings",
    label: "Watch Colors",
    Icon: WatchIcon,
    items: [
      { name: "backgroundColors", label: "Background Colors" },
      { name: "digital", label: "Digital", onClick },
      { name: "analogHours", label: "Analog Hours", onClick },
      { name: "analogMinutes", label: "Analog Minutes", onClick },
      { name: "analogSeconds", label: "Analog Seconds", onClick },
      { name: "centerDot", label: "Center Dot", onClick },
    ]
  },
  "divider",
  {
    name: "line",
    label: "Line",
    Icon: TimerIcon,
    items: [
      { name: "statements", label: "Statements", onClick },
      { name: "reports", label: "Reports", onClick }
    ]
  },
  "divider",
  {
    name: "settings",
    label: "Atributes",
    Icon: SettingsIcon,
    items: [
      { name: "profile", label: "Profile" },
      { name: "insurance", label: "Insurance", onClick },
      "divider",
      {
        name: "notifications",
        label: "Notifications",
        Icon: NotificationsIcon,
        items: [
          { name: "email", label: "Email", onClick },
          {
            name: "desktop",
            label: "Desktop",
            Icon: DesktopWindowsIcon,
            items: [
              { name: "schedule", label: "Schedule" },
              { name: "frequency", label: "Frequency" }
            ]
          },
          { name: "sms", label: "SMS" }
        ]
      }
    ]
  }
];

export default function MakeYourOwn() {
  return (
    <div>
      <Watch></Watch>
      <Sidebar items={items} />
    </div>
  )
}