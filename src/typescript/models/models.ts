interface AuthorFeatures {
    username: string,
    image: string,
    following: boolean
  }
  
export interface ArticleFeatures {
    author?: AuthorFeatures,
    body: string,
    createdAt?: string,
    description: string,
    favorited?: boolean,
    favoritesCount?: number,
    slug?: string,
    tagList: Array<string>,
    title: string,
    updatedAt?: string,
    editmode?: boolean
  }

export interface ArticlePayloadFeatures {  
    articles: Array<ArticleFeatures>,
    articlesCount: number
  }

export interface UserPayloadFeatures {
    username: string,
    email: string,
    image: string,
    token?: string,
    password?: string
  }

export type UserLoginType = {
  email: string,
  password: string
}

export interface FormDataFeatures {
    username?: string,
    email: string,
    image?: string,
    token?: string,
    password?: string
  }

export type OnDeleteModalType = () => void;