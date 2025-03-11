import ArticleTag from './articleTag';
import { FiltersOption, CheckOption } from './types';
import { StrapiTag } from '@/libs/litebox-lib/types/strapi/strapiBlog';

export interface FiltersProps {
  options: FiltersOption[];
  onClick: (option: CheckOption) => void;
}

const Filters = ({ options, onClick, ...props }: FiltersProps) => {
	return (
		<div {...props} className='flex items-center gap-3 flex-grow flex-wrap'>
			{options.map(option => ArticleTag({
				el: {id: option.id, name: option.name} as StrapiTag, 
				onClick: () => onClick({id: option.id, isChecked: !option.isChecked}),
				className: `${option.isChecked ? 'bg-peach' : 'bg-orange'} cursor-pointer`
			}))}
		</div>
	);
};

Filters.displayName = 'Filters';

export default Filters;
