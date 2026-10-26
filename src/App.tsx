import React, { useRef, useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EstimateSection } from './components/EstimateSection';
import { Footer } from './components/Footer';
import { ServiceFrequency, ServiceTypeId } from './utils/estimateCalculator';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceTypeId>(
    'Lawn Mowing & Maintenance'
  );
  const [selectedFrequency, setSelectedFrequency] =
    useState<ServiceFrequency>('weekly');
  const [address, setAddress] = useState<string>('');
  const nameInputRef = useRef<HTMLInputElement | null>(null);

  const scrollToEstimateForm = () => {
    const formSection = document.getElementById('estimate-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 300);
  };

  const handleSelectServiceForQuote = (service: ServiceTypeId) => {
    setSelectedService(service);
    scrollToEstimateForm();
  };

  const handleSelectZoneProgram = (
    service: ServiceTypeId,
    sampleAddress: string
  ) => {
    setSelectedService(service);
    if (!address) {
      setAddress(sampleAddress);
    }
    scrollToEstimateForm();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F9FAF7] text-[#14241B]">
      <Header onGetQuoteClick={scrollToEstimateForm} />

      <main className="flex-1">
        <HeroSection
          onGetQuoteClick={scrollToEstimateForm}
          onQuickSelectService={handleSelectServiceForQuote}
        />

        <ServicesGrid
          selectedService={selectedService}
          selectedFrequency={selectedFrequency}
          onFrequencyChange={setSelectedFrequency}
          onSelectServiceForQuote={handleSelectServiceForQuote}
        />

        <WhyChooseUs onSelectZoneProgram={handleSelectZoneProgram} />

        <EstimateSection
          nameInputRef={nameInputRef}
          selectedService={selectedService}
          onServiceChange={setSelectedService}
          selectedFrequency={selectedFrequency}
          onFrequencyChange={setSelectedFrequency}
          address={address}
          onAddressChange={setAddress}
        />
      </main>

      <Footer onGetQuoteClick={scrollToEstimateForm} />
    </div>
  );
}
