"use client";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

export function MantainProvides({ children }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      {children}
    </MantineProvider>
  );
}
