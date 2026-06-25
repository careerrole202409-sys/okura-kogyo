export interface Product {
  id: string;
  name: string;
  lead: string;
  image: string;
  thumbnailImage: string;
  postClass: string;
  bodyClass: string;
  descriptionHtml: string;
  features: string[];
  usesLabel: string;
  usesHtml: string;
  materialHtml?: string;
  specHtml?: string;
  pdfUrl?: string;
  pdfLabel?: string;
  contactItem: string;
  excerptText: string;
}
