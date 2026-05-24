import PageHeader from '@/components/PageHeader';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import { SITE } from '@/lib/data';
import { Mail, MapPin, Phone, Clock, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export const metadata = { title: 'Contact — TEKinspire' };

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something great together"
        subtitle="Tell us about your project, the role you need filled, or the transformation you want to drive. We typically reply within one business day."
        crumbs={[{ label: 'Contact Us' }]}
      />

      <section className="section pt-0">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="overflow-hidden rounded-3xl border border-ink-200/70">
                <Image
                  src="/images/contact-office.jpg"
                  alt="TEKinspire Edison, NJ office"
                  width={900}
                  height={500}
                  className="h-56 w-full object-cover transition-transform duration-[1.4s] hover:scale-105"
                />
              </div>
              <div className="rounded-3xl border border-ink-200/70 bg-white p-8">
                <h3 className="font-display text-xl font-semibold text-ink-900">Reach us directly</h3>
                <div className="mt-6 space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-ink-500">Office</div>
                      <div className="mt-1 text-ink-900">{SITE.address}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-ink-500">Phone</div>
                      <div className="mt-1 flex flex-wrap gap-x-3 text-ink-900">
                        {SITE.phones.map((p) => (
                          <a key={p} href={`tel:${p}`} className="hover:text-brand-600">{p}</a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-ink-500">Email</div>
                      <a href={`mailto:${SITE.email}`} className="mt-1 block text-ink-900 hover:text-brand-600">
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="card-icon !mb-0 !h-12 !w-12">
                      <Clock className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-[0.18em] text-ink-500">Hours</div>
                      <div className="mt-1 text-ink-900">Mon — Fri, 9:00 – 18:00 ET</div>
                    </div>
                  </div>
                </div>
                <div className="mt-7 flex gap-3 border-t border-ink-100 pt-6">
                  {[Linkedin, Twitter].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="grid h-10 w-10 place-items-center rounded-xl border border-ink-200 text-ink-700 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:bg-brand-50 hover:text-brand-600"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-ink-200/70">
                <iframe
                  title="TEKinspire Edison NJ office"
                  src="https://www.google.com/maps?q=1581+Route+27,+Edison,+NJ+08817&output=embed"
                  width="100%"
                  height="240"
                  loading="lazy"
                  className="block"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="rounded-3xl border border-ink-200/70 bg-white p-8 md:p-10">
              <h3 className="font-display text-2xl font-semibold text-ink-900">Send us a message</h3>
              <p className="mt-2 text-sm text-ink-700">
                Fill in a few details and the right person on our team will get back to you.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
