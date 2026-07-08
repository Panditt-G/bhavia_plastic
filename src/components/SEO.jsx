import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description, keywords, image }) {
  const location = useLocation();
  const currentUrl = `https://bhaviaplastic.com${location.pathname}`;
  
  const siteTitle = 'Bhavia Plastic';
  const defaultDesc = "Bhavia Plastic – Nashik's trusted wholesale & retail supplier of disposable cups, plates, food packaging, cleaning supplies & more.";
  const defaultImg = "https://res.cloudinary.com/dwzz3cxt1/image/upload/f_auto,q_auto/bhavia/hero_background";

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{siteTitle}</title>
      <meta name="description" content={description || defaultDesc} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:image" content={image || defaultImg} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
      <meta name="twitter:image" content={image || defaultImg} />
    </Helmet>
  );
}
