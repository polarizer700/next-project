'use client';

import Link from 'next/link';
import cn from 'classnames';
import styles from './MenuTopList.module.css';
import { usePathname } from 'next/navigation';
import tstyles from '@/app/assets/typography.module.css';

type Data = {
  title: string;
  path: string;
  initialPath?: string;
};

type MenuTopListProps = {
  data: Data[];
  handleClick: () => void;
};

export function MenuTopList({ data, handleClick }: MenuTopListProps) {


  // create a new array with the first 3 items
  const menuListItemsData = data.slice(0, 3).map((item) => {
    return { ...item, path: `/${item.path}`, initialPath: item.path };
  });

  // create a new array with the rest of the items
  const menuButtonItemsData = data.slice(4).map((item) => {
    return { ...item, path: `/${item.path}`, initialPath: item.path };
  });

  return (
    <ul className={cn(styles.menuList)}>
      {menuListItemsData.map((item, index) => (
        <Link
          key={index}
          className={cn(styles.menuListItem, tstyles.menuLink, {
            'menu-link-green': item.path
          })}
          href={item.path}>
          {item.title}
        </Link>
      ))}
    </ul>
  );
}
