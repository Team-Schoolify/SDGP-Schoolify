// import * as React from "react";
'use client'

// 1. import `HeroUIProvider` component
import {HeroUIProvider} from "@heroui/react";

export function Providers({children}) {
  // 2. Wrap HeroUIProvider at the root of your app
  return (
    <HeroUIProvider>
      {children}
    </HeroUIProvider>
  );
}