"use client";

import { createContext, useContext } from "react";

const MobileContext = createContext(false);

export function useIsMobile() {
  return useContext(MobileContext);
}

export default MobileContext;
