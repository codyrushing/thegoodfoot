export type StoryblokImageAsset = {
    id: number,
    alt: string,
    name: string,
    focus: string,
    title: string,
    source: string,
    filename: string,
    copyright: string,
    fieldtype: 'asset',
    meta_data: {
      alt: string,
      title: string,
      source: string,
      copyright: string
    },
    is_private: false,
    is_external_url: false
}