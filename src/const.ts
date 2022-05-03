enum AppRoute {
  Main = '/',
  Guitar = '/guitars/:id',
  AddComments = '/guitars/:id/comments',
}

enum APIRoute {
  Guitars = '/guitars',
  Comments = 'comments',
  Coupons = '/coupons',
  Orders = '/orders',
}

enum Coupons {
  light = 'light-333',
  medium = 'medium-444',
  height = 'height-555',
}

enum Sorts {
  byPrice = 'по цене',
  byPopular = 'по популярности',
}

enum MenuItems {
  catalog = 'Каталог',
  whereBuy = 'Где купить?',
  aboutCompany = 'О компании',
}

const INITIAL_GUITAR_COMMENT_COUNT = 4;
const SHOW_MORE_COMMENTS_STEP = 4;
const MAX_GUITAR_COUNT = 9;

export {
  AppRoute,
  APIRoute,
  Coupons,
  Sorts,
  MenuItems,
  INITIAL_GUITAR_COMMENT_COUNT,
  SHOW_MORE_COMMENTS_STEP,
  MAX_GUITAR_COUNT
};
