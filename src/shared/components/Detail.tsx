import Image from 'next/image';
import { DetailTypes } from '../types/menuItem';

const Detail = ({
  category,
  name,
  englishName,
  description,
  volume,
  imageSrc,
  imageAlt,
  nutrition,
  allergens,
}: DetailTypes) => {
  return (
    <div className="flex justify-between md:flex-row gap-10 mt-6">
      <div className="md:w-2/5 flex justify-center items-start ">
        <Image src={imageSrc} alt={imageAlt} width="530" height="530" />
      </div>
      {nutrition && (
        <>
          <div className="md:w-3/5">
            <div className="text-sm text-neutral-500 mb-2">
              {category === 'drinks' ? '음료' : '디저트'}
            </div>
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-sm text-neutral-500 mb-4">{englishName}</p>
            <p className="text-base mb-6">{description}</p>
            <hr className="border-neutral-300 my-6" />
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg">제품 영양 정보</h2>
              <span className="text-sm text-neutral-500">
                Small Size / {volume} 기준
              </span>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-10 text-sm text-neutral-700 mb-6">
              <li className="flex justify-between">
                <span>1회 제공량 (kcal)</span>
                <span>{nutrition?.calories}</span>
              </li>
              <li className="flex justify-between">
                <span>포화지방 (g)</span>
                <span>{nutrition.fat}</span>
              </li>
              <li className="flex justify-between">
                <span>단백질 (g)</span>
                <span>{nutrition.protein}</span>
              </li>
              <li className="flex justify-between">
                <span>나트륨 (mg)</span>
                <span>{nutrition.sodium}</span>
              </li>
              <li className="flex justify-between">
                <span>당류 (g)</span>
                <span>{nutrition.sugar}</span>
              </li>
              <li className="flex justify-between">
                <span>카페인 (mg)</span>
                <span>{nutrition.caffeine}</span>
              </li>
            </ul>
            <p className="bg-neutral-200 text-sm text-neutral-800  px-4 py-3 mb-6 rounded">
              {/* <p className="text-sm py-3 mb-6  text-rose-700"> */}
              알레르기 주의 성분 안내:{allergens.join(', ')}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
