'use client'

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from './styles.module.scss';

type CustomLinkProps = {
  children: ReactNode
} & LinkProps & ComponentPropsWithoutRef<'a'>

export default function Navlink({ children, href, ...rest}: CustomLinkProps) {
  const pathname = usePathname()

  const isCurrentPath = pathname === href || pathname === rest.as || pathname?.startsWith(String(rest.as));

  return(
    <Link {...rest} href={href} className={isCurrentPath ? styles.navlink : ''}>
      {children}
    </Link>
  )
}