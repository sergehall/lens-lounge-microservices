import { FaHeart, FaRegHeart, FaComment, FaShare, FaEllipsisH, FaUsers } from 'react-icons/fa';
import { FiMoreHorizontal } from 'react-icons/fi';
import { HiDotsHorizontal } from 'react-icons/hi';
import { RiMoreFill } from 'react-icons/ri';
import { IconBaseProps } from 'react-icons';
import React from 'react';

export type IconComponent = (props: IconBaseProps) => React.ReactElement;

export const Icons = {
  Heart: FaHeart as IconComponent,
  RegHeart: FaRegHeart as IconComponent,
  Comment: FaComment as IconComponent,
  Share: FaShare as IconComponent,
  EllipsisBold: FaEllipsisH as IconComponent,
  EllipsisMinimal: FiMoreHorizontal as IconComponent,
  EllipsisLarge: HiDotsHorizontal as IconComponent,
  EllipsisExtraBold: RiMoreFill as IconComponent,
  Users: FaUsers as IconComponent,
};
