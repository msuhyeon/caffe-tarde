import Image from 'next/image';
import Link from 'next/link';
import { DetailTypes } from '../types/menuItem';

type MenuGridProps = {
  sortedMenu: DetailTypes[];
};

const MenuGrid = ({ sortedMenu }: MenuGridProps) => {
  return (
    <div className="grid grid-cols-4 gap-6">
      {sortedMenu.map(item => (
        <div key={item.id}>
          <div className="overflow-hidden">
            <Link
              className="hover:bg-black-500"
              href={`/menu/${item.category === 'drinks' ? 'drinks/' : 'deserts/'}${item.id}`}
            >
              <Image
                src={item.imageSrc}
                alt={item.imageSrc}
                width="530"
                height="530"
                className="transform transition duration-200 ease-out hover:scale-105"
              />
            </Link>
          </div>
          <div className="py-5 bg-black-100">
            <span className="text-xl font-semibold">{item.name}</span>
            <p className="text-neutral-500 text-sm py-2">{item.englishName}</p>
            <p className="">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
