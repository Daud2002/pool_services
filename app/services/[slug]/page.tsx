"use client";
import { getServiceBySlug } from '@/data/servicesData';
import ServicePageContent from '@/components/ServicePageContent';
import { useParams } from 'next/navigation';

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);

  return <ServicePageContent service={service} />;
}
