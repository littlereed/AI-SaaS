'use client';

import { useEffect } from "react";
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('5ceb7858-7e7f-4228-870e-38d7e242e58d');
  }, []);

  return null;
};