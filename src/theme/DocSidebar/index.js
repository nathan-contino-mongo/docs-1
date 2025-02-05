
   
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
 import React, { useState } from 'react';
 import clsx from 'clsx';
 import {
   useThemeConfig,
   useAnnouncementBar,
   MobileSecondaryMenuFiller,
   ThemeClassNames,
 } from '@docusaurus/theme-common';
 import useWindowSize from '@theme/hooks/useWindowSize';
 import { DocSidebarItems } from '@theme/DocSidebarItem';
 import styles from './styles.module.css';
 
 import Link from '@docusaurus/Link';
 import ContextSwitcher from '@site/src/components/ContextSwitcher';
 import { ChevronLeftIcon } from '@heroicons/react/outline';
 
 import BrowserOnly from '@docusaurus/BrowserOnly';
 
 function useShowAnnouncementBar() {
   const { isClosed } = useAnnouncementBar();
   const [showAnnouncementBar, setShowAnnouncementBar] = useState(!isClosed);
   return showAnnouncementBar;
 }
 
 function HideableSidebarButton({ onClick }) {
   return (
     <div className="absolute top-0 right-0 flex h-full w-1">
       <button
         className="absolute right-[-12px] mt-20 flex h-6 w-6 cursor-pointer items-center justify-center rounded-md bg-background-200"
         onClick={onClick}
         onKeyDown={onClick}
         tabIndex={0}
         aria-label="Collapse sidebar"
       >
         <ChevronLeftIcon className="h-3 text-text" />
       </button>
     </div>
   );
 }
 
 const getDocId = () => {
   const [, doc] = window.location.pathname.split('/');
   if (['docs', '', 'guides', 'cli'].includes(doc)) return 'default';
   return doc;
 };
 
 const DocManager = () => {
   const docId = getDocId();
 
   return (
     <div className="my-4 flex items-center justify-end px-4">
       <ContextSwitcher className="flex-[3]" />
     </div>
   );
 };
 
 function DocSidebarDesktop({ path, sidebar, onCollapse, isHidden }) {
   const showAnnouncementBar = useShowAnnouncementBar();
   const {
     navbar: { hideOnScroll },
     hideableSidebar,
   } = useThemeConfig();
   const { isClosed: isAnnouncementBarClosed } = useAnnouncementBar();
 
   return (
     <div
       className={clsx(styles.sidebar, {
         [styles.sidebarWithHideableNavbar]: hideOnScroll,
         [styles.sidebarHidden]: isHidden,
       })}
     >
       <nav
         className={clsx(
            'overflow-y-auto',
           'menu thin-scrollbar',
           'overflow-x-visible',
           styles.menu,
           {
             [styles.menuWithAnnouncementBar]:
               !isAnnouncementBarClosed && showAnnouncementBar,
           }
         )}
       >
         <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list')}>
           <BrowserOnly>{() => <DocManager />}</BrowserOnly>
           <DocSidebarItems items={sidebar} activePath={path} />
         </ul>
       </nav>
       {hideableSidebar && <HideableSidebarButton onClick={onCollapse} />}
     </div>
   );
 }
 
 const DocSidebarMobileSecondaryMenu = ({ toggleSidebar, sidebar, path }) => {
   return (
     <ul className={clsx(ThemeClassNames.docs.docSidebarMenu, 'menu__list', 'overflow-y-auto')}>
       <BrowserOnly>{() => <DocManager />}</BrowserOnly>
       <DocSidebarItems
         items={sidebar}
         activePath={path}
         onItemClick={() => toggleSidebar()}
       />
     </ul>
   );
 };
 
 function DocSidebarMobile(props) {
   return (
     <MobileSecondaryMenuFiller
       className={clsx('overflow-y-auto')}
       component={DocSidebarMobileSecondaryMenu}
       props={props}
     />
   );
 }
 
 const DocSidebarDesktopMemo = React.memo(DocSidebarDesktop);
 const DocSidebarMobileMemo = React.memo(DocSidebarMobile);
 export default function DocSidebar(props) {
   const windowSize = useWindowSize(); // Desktop sidebar visible on hydration: need SSR rendering
 
   const shouldRenderSidebarDesktop =
     windowSize === 'desktop' || windowSize === 'ssr'; // Mobile sidebar not visible on hydration: can avoid SSR rendering
 
   const shouldRenderSidebarMobile = windowSize === 'mobile';
   return (
     <>
       {shouldRenderSidebarDesktop && <DocSidebarDesktopMemo {...props} />}
       {shouldRenderSidebarMobile && <DocSidebarMobileMemo {...props} />}
     </>
   );
 }