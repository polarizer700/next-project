'use client';
import {useContext} from 'react';
import {usePathname, useRouter} from 'next/navigation';
import Image from 'next/image';
import styles from './Header.module.css';
import {PATHS} from '@/routes';
import Logo from '@/public/img/logo-bg.svg';
import {useModals} from '@mantine/modals';
// import {useOpenModal} from '@/app/[locale]/hooks/useOpenModal';
import {MenuTopList} from '../MenuTopList';
// import {BurgerMenuContext, ContextType} from '@/app/[locale]/providers/BurgerMenuProvider';
import {menuItemsData, updatedMenuItemsData} from './menuItemsData';
import {LinkButton} from "@/app/components/LinkButton";
import cn from "classnames";

export function Header() {
  // const { closeAll } = useModals();
  // const { openModal } = useOpenModal(
  //   'menuModal',
  //   styles.modalHeader,
  //   styles.bodyModal
  // );
  // const { opened, toggle } = useContext<ContextType>(BurgerMenuContext);

  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = () => {
    if (pathname !== PATHS.main) {
      router.push(PATHS.main);
    }
    // closeAll();
  };

  // const toggleMenu = () => {
  //   opened ? closeAll() : openModal();
  //   toggle();
  // };

  return (
    <header className={styles.header}>
      <div className={cn(styles.headerInside, 'container')}>
        {/*<div className={styles.burgerMenuContainer}>*/}
        {/*  <div className={styles.burgerMenuWrapper} onClick={toggleMenu}>*/}
        {/*    <Burger*/}
        {/*      opened={opened}*/}
        {/*      size={14}*/}
        {/*      aria-label="Toggle navigation"*/}
        {/*      className={styles.burgerMenu}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*</div>*/}
        <MenuTopList data={updatedMenuItemsData} handleClick={handleLogoClick} />
        <Image
          className="logo "
          src={Logo}
          alt="logo"
          onClick={handleLogoClick}
        />
        <div className={styles.mlAuto}>
          <LinkButton text={'Sign in'} style={'outline'} link={'232'}/>
          <LinkButton text={'Registration'} style={'gradient'} link={'232'}/>
        </div>
      </div>
    </header>
  );
}
