type TMetadata = {
  imageUrl?: string
  description?: string
}

type TLanguages = {
  [key: string]: string
}

type TMenu = {
  name: string
  url: string
  submenu?: TMenu[]
}
