// import { CategoryMapping } from '../types/index';


export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export const settings = {
	
};
  
export const constraintsCard = {
	name: {
		presence: { message: '^Поле не может быть пустым', allowEmpty: false },
  }
};
