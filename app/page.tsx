import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutUs } from "@/components/about-us"
import { Services } from "@/components/services"
import { Products } from "@/components/products"
import { FAQs } from "@/components/faqs"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Services />
        <Products />
        <FAQs />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
