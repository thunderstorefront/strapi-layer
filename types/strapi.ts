type Image = {
  id: number;
  url: string;
};

type CTAButton = {
  text: string;
  url: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
  image: Image;
};

type Testimonial = {
  id: number;
  quote: string;
  author: string;
};

type FormField = {
  type: string;
  label: string;
  placeholder: string;
};

export type HeroSection = {
  __component: 'section.hero';
  id: number;
  title: string;
  subtitle: string;
  background_image: Image;
  cta_button: CTAButton;
};

export type FeaturedProductsSection = {
  __component: 'section.featured-products';
  id: number;
  products: Product[];
};

export type TestimonialsSection = {
  __component: 'section.testimonials';
  id: number;
  testimonials: Testimonial[];
};

export type ContactFormSection = {
  __component: 'section.contact-form';
  id: number;
  form_title: string;
  fields: FormField[];
};

type PageBlock =
  | HeroSection
  | FeaturedProductsSection
  | TestimonialsSection
  | ContactFormSection;

export type Page = {
  id: number;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  blocks: PageBlock[];
};
