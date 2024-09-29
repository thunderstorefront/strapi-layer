const content = {
  id: 1,
  title: 'Homepage',
  slug: 'homepage',
  createdAt: '2024-09-29T12:34:56.000Z',
  updatedAt: '2024-09-29T12:34:56.000Z',
  publishedAt: '2024-09-29T12:34:56.000Z',
  blocks: [
    {
      __component: 'section.hero',
      id: 1,
      title: 'Welcome to Our Store',
      subtitle: 'Best Electronics at the Best Prices',
      background_image: {
        id: 1,
        url: '/uploads/hero_background.jpg'
      },
      cta_button: {
        text: 'Shop Now',
        url: '/shop'
      }
    },
    {
      __component: 'section.featured-products',
      id: 2,
      products: [
        {
          id: 1,
          name: 'Smartphone XYZ',
          price: 599,
          image: {
            id: 2,
            url: '/uploads/smartphone_xyz.jpg'
          }
        },
        {
          id: 2,
          name: '4K TV Ultra',
          price: 1299,
          image: {
            id: 3,
            url: '/uploads/tv_ultra.jpg'
          }
        }
      ]
    },
    {
      __component: 'section.testimonials',
      id: 3,
      testimonials: [
        {
          id: 1,
          quote: 'This is the best store ever!',
          author: 'John Doe'
        },
        {
          id: 2,
          quote: 'Amazing quality and fast delivery.',
          author: 'Jane Smith'
        }
      ]
    },
    {
      __component: 'section.contact-form',
      id: 4,
      form_title: 'Get in Touch',
      fields: [
        {
          type: 'text',
          label: 'Your Name',
          placeholder: 'Enter your name'
        },
        {
          type: 'email',
          label: 'Your Email',
          placeholder: 'Enter your email'
        },
        {
          type: 'textarea',
          label: 'Your Message',
          placeholder: 'Enter your message'
        }
      ]
    }
  ]
};

export const response = {
  data: [
    {
      attributes: content
    }
  ],
  meta: {}
};
