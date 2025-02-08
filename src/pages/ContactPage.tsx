import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { ContactMap } from '../components/contact/ContactMap';
import { PageHeader } from '../components/common/PageHeader';

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Contact Us"
        description="Get in touch with us for any queries or assistance"
      />
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ContactInfo />
          <ContactForm />
        </div>
        <ContactMap />
      </div>
    </div>
  );
}