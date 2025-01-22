import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"

export function PrivacyPolicy() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    )
  }

  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger
          onClick={() => toggleItem("item-1")}
          className="cursor-pointer font-semibold text-lg py-2 rounded-md"
        >
          1. Information We Collect
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-1") ? "open" : ""}`}>
          We collect information you provide directly to us, such as when you create an account, use our services, or
          communicate with us.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger
          onClick={() => toggleItem("item-2")}
          className="cursor-pointer font-semibold text-lg py-2 rounded-md"
        >
          2. How We Use Your Information
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-2") ? "open" : ""}`}>
          We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to
          protect our company and our users.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger
          onClick={() => toggleItem("item-3")}
          className="cursor-pointer font-semibold text-lg py-2 rounded-md"
        >
          3. Information Sharing and Disclosure
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-3") ? "open" : ""}`}>
          We do not share personal information with companies, organizations, or individuals outside of our company
          except in specific circumstances outlined in this policy.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger
          onClick={() => toggleItem("item-4")}
          className="cursor-pointer font-semibold text-lg py-2 rounded-md"
        >
          4. Data Security
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-4") ? "open" : ""}`}>
          We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or
          destruction of information we hold.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger
          onClick={() => toggleItem("item-5")}
          className="cursor-pointer font-semibold text-lg py-2 rounded-md"
        >
          5. Your Choices
        </AccordionTrigger>
        <AccordionContent className={`accordion-content ${openItems.includes("item-5") ? "open" : ""}`}>
          You may update, correct, or delete your account information at any time by logging into your online account or
          by contacting us.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
