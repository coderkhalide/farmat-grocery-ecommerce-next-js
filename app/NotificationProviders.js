"use client";
import React from "react";
import { NotificationsProvider } from "@mantine/notifications";

function NotificationProviders({ children }) {
  return (
    <NotificationsProvider position="top-right">
      {children}
    </NotificationsProvider>
  );
}

export default NotificationProviders;
