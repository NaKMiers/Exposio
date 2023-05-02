export const slugify = string => {
   const a = 'àáãảạăắằẳẵặâấầẩẫậ'
   const e = 'èéẻẽẹêếềểễệ'
   const i = 'ìíỉĩị'
   const o = 'òóỏõọôồốổỗộơớờởỡợ'
   const u = 'ùúủũụưứừửữự'
   const y = 'ỳýỷỹỵ'
   const d = 'đ'
   const A = 'ÀÁÃẢẠĂẮẰẲẴẶÂẤẦẨẪẬ'
   const E = 'ÈÉẺẼẸÊẾỀỂỄỆ'
   const I = 'ÌÍỈĨỊ'
   const O = 'ÒÓỎÕỌÔỒỐỔỖỘƠỚỜỞỠỢ'
   const U = 'ÙÚỦŨỤƯỨỪỬỮỰ'
   const Y = 'ỲÝỶỸỴ'
   const D = 'Đ'

   string = string.toLowerCase()
   string = string.replace(new RegExp(`[${a}]`, 'gi'), 'a')
   string = string.replace(new RegExp(`[${e}]`, 'gi'), 'e')
   string = string.replace(new RegExp(`[${i}]`, 'gi'), 'i')
   string = string.replace(new RegExp(`[${o}]`, 'gi'), 'o')
   string = string.replace(new RegExp(`[${u}]`, 'gi'), 'u')
   string = string.replace(new RegExp(`[${y}]`, 'gi'), 'y')
   string = string.replace(new RegExp(`[${d}]`, 'gi'), 'd')
   string = string.replace(new RegExp(`[${A}]`, 'gi'), 'A')
   string = string.replace(new RegExp(`[${E}]`, 'gi'), 'E')
   string = string.replace(new RegExp(`[${I}]`, 'gi'), 'I')
   string = string.replace(new RegExp(`[${O}]`, 'gi'), 'O')
   string = string.replace(new RegExp(`[${U}]`, 'gi'), 'U')
   string = string.replace(new RegExp(`[${Y}]`, 'gi'), 'Y')
   string = string.replace(new RegExp(`[${D}]`, 'gi'), 'D')
   string = string.replace(/[^a-zA-Z0-9]/g, '-')
   string = string.replace(/--+/g, '-')
   string = string.replace(/^-+/g, '')
   string = string.replace(/-+$/g, '')
   return string
}

export const blogs = [
   {
      title: 'On the road',
      date: '27 April, 2023',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis, ut hendrerit ...',
      thumbnail: '/imgs/blog1.jpg',
      like: false,
   },
   {
      title: 'Relaxing with sharks',
      date: '27 April, 2023',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis, ut hendrerit ...',
      thumbnail: '/imgs/blog2.jpg',
      like: false,
   },
   {
      title: 'Magic view',
      date: '27 April, 2023',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis, ut hendrerit ...',
      thumbnail: '/imgs/blog3.jpg',
      like: false,
   },
   {
      title: 'In the night',
      date: '27 April, 2023',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis, ut hendrerit ...',
      thumbnail: '/imgs/blog4.jpg',
      like: false,
   },
   {
      title: 'In the air',
      date: '27 April, 2023',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis, ut hendrerit ...',
      thumbnail: '/imgs/blog5.jpg',
      like: false,
   },
   {
      title: 'Northen light',
      date: '27 April, 2023',
      content:
         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris fermentum dictum congue. Vivamus sed porta risus, ut laoreet leo. Aliquam aliquam id diam at tincidunt. Ut adipiscing, mauris et bibendum consequat, nisl nulla vulputate turpis, ut hendrerit ...',
      thumbnail: '/imgs/blog6.jpg',
      like: false,
   },
]

export const galleries = [
   {
      image: '/imgs/gal1.jpg',
      like: false,
   },
   {
      image: '/imgs/gal2.jpg',
      like: false,
   },
   {
      image: '/imgs/gal3.jpg',
      like: false,
   },
   {
      image: '/imgs/gal4.jpg',
      like: false,
   },
   {
      image: '/imgs/gal5.jpg',
      like: false,
   },
   {
      image: '/imgs/gal7.jpg',
      like: false,
   },
   {
      image: '/imgs/gal8.jpg',
      like: false,
   },
   {
      image: '/imgs/gal9.jpg',
      like: false,
   },
   {
      image: '/imgs/gal10.jpg',
      like: false,
   },
   {
      image: '/imgs/gal11.jpg',
      like: false,
   },
   {
      image: '/imgs/gal12.jpg',
      like: false,
   },
   {
      image: '/imgs/gal13.jpg',
      like: false,
   },
   {
      image: '/imgs/gal14.jpg',
      like: false,
   },
   {
      image: '/imgs/gal15.jpg',
      like: false,
   },
   {
      image: '/imgs/gal16.jpg',
      like: false,
   },
   {
      image: '/imgs/gal17.jpg',
      like: false,
   },
   {
      image: '/imgs/gal18.jpg',
      like: false,
   },
   {
      image: '/imgs/gal19.jpg',
      like: false,
   },
   {
      image: '/imgs/gal20.jpg',
      like: false,
   },
]
