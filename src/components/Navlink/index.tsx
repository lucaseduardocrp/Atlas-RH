'use client'

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type CustomLinkProps = {
  children: ReactNode
  className: string
} & LinkProps & ComponentPropsWithoutRef<'a'>

export default function Navlink({ children, href, className, ...rest}: CustomLinkProps) {
  const pathname = usePathname()

  const isCurrentPath = pathname === href || pathname === rest.as || pathname?.startsWith(String(rest.as));

  return(
    <Link {...rest} href={href} className={isCurrentPath ? className : ''}>
      {children}
    </Link>
  )
}