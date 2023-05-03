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
         "Embarking on a backpacking trip is a thrilling adventure, full of excitement and the unknown. The road ahead is a blank canvas, waiting to be filled with new experiences, breathtaking views, and unexpected challenges. Each step is a new opportunity to discover something about oneself and the world. The weight of the backpack is a reminder of the essentials needed to survive in the great outdoors. As the miles pass, the scenery changes, and so does one's perspective. The journey is not just about the destination but about the people met along the way, the stories shared, and the memories made. A backpacking trip is a test of endurance, resilience, and determination, but it's also a reminder that life is meant to be lived to the fullest.",
      thumbnail: '/imgs/blog1.jpg',
      like: false,
   },
   {
      title: 'Relaxing with sharks',
      date: '27 April, 2023',
      content:
         'During my recent beach vacation, I had the opportunity to go on a shark diving adventure. At first, the idea of swimming with sharks made me nervous, but the experienced guides reassured me that it was safe and exhilarating.\n\nAs I lowered myself into the water, I was amazed by the crystal-clear visibility and the vibrant colors of the coral reefs. Then, out of nowhere, a group of curious sharks appeared. They gracefully swam around us, coming within inches of our diving cage. I could see the intricate details of their skin and feel their powerful energy as they swam past.\n\nAfter the initial excitement wore off, I found myself completely relaxed in the underwater world. Watching the sharks in their natural habitat was a humbling experience, and I felt privileged to be able to witness it. The peaceful silence and the gentle sway of the water had a calming effect on me, and I felt completely immersed in the beauty of the ocean.\n\nAs the excursion came to an end, I was left with a newfound appreciation for these magnificent creatures and the underwater world. The experience of swimming with sharks was not only exhilarating but also a reminder of the importance of preserving our oceans and the creatures that call it home.',
      thumbnail: '/imgs/blog2.jpg',
      like: false,
   },
   {
      title: 'Magic view',
      date: '27 April, 2023',
      content:
         'Sitting on a boat and taking in the picturesque view of a river was a tranquil experience that left me in awe. As the boat glided along the serene waters, I was captivated by the stunning scenery that surrounded me. The glistening water sparkled in the sunlight and reflected the beauty of the sky and the greenery along the riverbank. The peaceful sound of the gentle waves and the rustling of the trees created a calming atmosphere that was perfect for escaping the hustle and bustle of everyday life.\n\nAs I continued to admire the breathtaking view, I felt a sense of gratitude for being able to witness the beauty of nature firsthand. It was a moment that reminded me of the simple pleasures in life and the importance of taking the time to appreciate them. The tranquil river view was a serene escape that left a lasting impression on my mind and soul.',
      thumbnail: '/imgs/blog3.jpg',
      like: false,
   },
   {
      title: 'In the night',
      date: '27 April, 2023',
      content:
         "The night has always held a certain mystique and allure for me. The darkness brings with it a sense of magic, mystery, and possibility. As the sun sets, the world around us transforms into a different realm, filled with new sounds, sights, and smells. The twinkling of stars, the rustling of leaves, and the gentle hum of nocturnal creatures create a symphony that's both soothing and mesmerizing.\n\nIn the night, the world seems to slow down, allowing us to pause and reflect. It's a time for introspection, for letting go of the worries of the day, and for connecting with our inner selves. The darkness also has a way of bringing people together, whether it's around a campfire, at a music festival, or simply strolling through a quiet neighborhood. There's a sense of camaraderie and shared experience that's hard to replicate during the day.\n\nThe night is a reminder of the power and beauty of the natural world, and a testament to the resilience and adaptability of life. It's a time to embrace the unknown and to find comfort in the magic of darkness.",
      thumbnail: '/imgs/blog4.jpg',
      like: false,
   },
   {
      title: 'In the air',
      date: '27 April, 2023',
      content:
         "There's something inherently magical about being up in the air. Whether it's in a plane, a hot air balloon, or a paraglider, the feeling of soaring above the earth is unlike anything else. The wind rushing through your hair, the feeling of weightlessness, and the breathtaking views all combine to create a sense of freedom and adventure that's hard to replicate on the ground.\n\nIn the air, you're removed from the hustle and bustle of everyday life. The noise and chaos fade away, replaced by a sense of tranquility and serenity. The world takes on a different perspective from up high, with familiar landmarks and landscapes looking completely different from above. It's a reminder of the beauty and vastness of our planet, and a humbling experience to realize how small we are in the grand scheme of things.\n\nFlight also has a way of inspiring creativity and innovation. From the earliest days of human history, people have looked up to the sky and dreamed of taking to the air. And thanks to the ingenuity and determination of inventors and engineers, that dream has become a reality. Today, aviation technology continues to push the boundaries of what's possible, opening up new frontiers of exploration and discovery.\n\nIn the air, anything seems possible. It's a space where dreams can take flight, and where the possibilities are limited only by our own imagination.",
      thumbnail: '/imgs/blog5.jpg',
      like: false,
   },
   {
      title: 'Northen light',
      date: '27 April, 2023',
      content:
         "The Northern Lights, also known as Aurora Borealis, are one of the most spectacular natural phenomena in the world. They are a beautiful display of light and color that can be seen in the northern hemisphere, particularly in the Arctic regions.\n\nThe Northern Lights are caused by the collision of charged particles from the sun with atoms in the Earth's atmosphere. These collisions produce energy that is released as light, creating the colorful displays that we see in the sky.\n\nThe best time to see the Northern Lights is during the winter months, when the nights are longer and darker. It's also best to view them away from the lights of cities and towns, in a remote location where the sky is clear and unobstructed.\n\nExperiencing the Northern Lights is a truly unforgettable experience that everyone should have at least once in their lifetime. The beauty and magic of these lights is something that cannot be fully captured in words or pictures, and must be seen to be believed.",
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

export const backgrounds = [
   { bg: '/imgs/background1.jpg', id: 1 },
   { bg: '/imgs/background2.jpg', id: 2 },
   { bg: '/imgs/background3.jpg', id: 3 },
]

export const brands = [
   {
      name: 'Cassette Studio',
      country: 'Ireland',
      logo: '/imgs/brand1.png',
   },
   {
      name: 'Keep Rollin',
      country: 'Ireland',
      logo: '/imgs/brand2.png',
   },
   {
      name: 'Stockholm Old',
      country: 'Scotland',
      logo: '/imgs/brand3.png',
   },
   {
      name: 'Elon Wild',
      country: 'Sweden',
      logo: '/imgs/brand4.png',
   },
   {
      name: 'Mountfox Gear',
      country: 'Sweden',
      logo: '/imgs/brand5.png',
   },
   {
      name: 'NYX Creations',
      country: 'London',
      logo: '/imgs/brand6.png',
   },
   {
      name: 'Thomas Van Cam',
      country: 'China',
      logo: '/imgs/brand7.png',
   },
   {
      name: 'Van Cameos',
      country: 'Germany',
      logo: '/imgs/brand8.png',
   },
   {
      name: 'Top View Montana',
      country: 'Germany',
      logo: '/imgs/brand9.png',
   },
   {
      name: 'Tropic Vibes',
      country: 'Germany',
      logo: '/imgs/brand10.png',
   },
]
