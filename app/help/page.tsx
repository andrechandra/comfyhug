import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HelpPage() {
  return (
    <main className="flex-1">
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Help Center</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find answers to common questions about COMFYHUG products and services.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <Tabs defaultValue="faq" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="faq">FAQs</TabsTrigger>
                <TabsTrigger value="sizing">Sizing Guide</TabsTrigger>
                <TabsTrigger value="care">Fabric Care</TabsTrigger>
              </TabsList>
              <TabsContent value="faq" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is hidden padding technology?</AccordionTrigger>
                    <AccordionContent>
                      Our hidden padding technology is a proprietary design that strategically places extra cushioning
                      in key areas for maximum comfort, while maintaining a sleek, non-bulky appearance. The padding is
                      seamlessly integrated into the garment, providing support without compromising style.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>How do I wash COMFYHUG products?</AccordionTrigger>
                    <AccordionContent>
                      Most COMFYHUG products can be machine washed on a gentle cycle with cold water and similar colors.
                      We recommend using mild detergent and avoiding bleach or fabric softeners. For best results, lay
                      flat or hang to dry. Specific care instructions are included on each product's tag and detail
                      page.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is your return policy?</AccordionTrigger>
                    <AccordionContent>
                      We offer a 30-day return policy for unworn items in original packaging. If you're not completely
                      satisfied with your purchase, you can return it for a full refund or exchange. Please note that
                      sale items and intimates are final sale for hygiene reasons.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How long does shipping take?</AccordionTrigger>
                    <AccordionContent>
                      Standard shipping typically takes 3-5 business days within the continental US. Express shipping
                      options are available at checkout for 1-2 business day delivery. International shipping times vary
                      by location, generally taking 7-14 business days.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Are COMFYHUG products sustainable?</AccordionTrigger>
                    <AccordionContent>
                      Yes, sustainability is a core value at COMFYHUG. We use eco-friendly materials wherever possible,
                      including organic cotton, recycled polyester, and biodegradable packaging. Our manufacturing
                      partners adhere to strict environmental standards, and we're continuously working to reduce our
                      carbon footprint.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="sizing" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">How to Measure</h3>
                    <p className="text-muted-foreground mb-4">
                      For the most accurate fit, we recommend taking your measurements before ordering. Here's how:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>
                        <strong>Chest:</strong> Measure around the fullest part of your chest, keeping the tape
                        horizontal.
                      </li>
                      <li>
                        <strong>Waist:</strong> Measure around your natural waistline, keeping the tape comfortably
                        loose.
                      </li>
                      <li>
                        <strong>Hips:</strong> Measure around the fullest part of your hips.
                      </li>
                      <li>
                        <strong>Inseam:</strong> Measure from the crotch to the bottom of the ankle.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Size Chart</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-4">Size</th>
                            <th className="text-left py-2 px-4">Chest (in)</th>
                            <th className="text-left py-2 px-4">Waist (in)</th>
                            <th className="text-left py-2 px-4">Hips (in)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-2 px-4">XS</td>
                            <td className="py-2 px-4">32-34</td>
                            <td className="py-2 px-4">24-26</td>
                            <td className="py-2 px-4">34-36</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-4">S</td>
                            <td className="py-2 px-4">34-36</td>
                            <td className="py-2 px-4">26-28</td>
                            <td className="py-2 px-4">36-38</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-4">M</td>
                            <td className="py-2 px-4">36-38</td>
                            <td className="py-2 px-4">28-30</td>
                            <td className="py-2 px-4">38-40</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-4">L</td>
                            <td className="py-2 px-4">38-40</td>
                            <td className="py-2 px-4">30-32</td>
                            <td className="py-2 px-4">40-42</td>
                          </tr>
                          <tr className="border-b">
                            <td className="py-2 px-4">XL</td>
                            <td className="py-2 px-4">40-42</td>
                            <td className="py-2 px-4">32-34</td>
                            <td className="py-2 px-4">42-44</td>
                          </tr>
                          <tr>
                            <td className="py-2 px-4">XXL</td>
                            <td className="py-2 px-4">42-44</td>
                            <td className="py-2 px-4">34-36</td>
                            <td className="py-2 px-4">44-46</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fit Tips</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Our products are designed with a relaxed fit for maximum comfort.</li>
                      <li>
                        If you're between sizes, we recommend sizing down for a more fitted look or sizing up for a more
                        relaxed fit.
                      </li>
                      <li>
                        The hidden padding technology adds minimal bulk, so there's no need to size up to accommodate
                        it.
                      </li>
                      <li>
                        For loungewear sets, you can mix and match sizes if your top and bottom measurements fall in
                        different size ranges.
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="care" className="mt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">General Care Instructions</h3>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Machine wash cold with similar colors</li>
                      <li>Use mild detergent</li>
                      <li>Avoid bleach and fabric softeners</li>
                      <li>Tumble dry low or lay flat to dry</li>
                      <li>Cool iron if needed</li>
                      <li>Do not dry clean</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Fabric-Specific Care</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium">Cotton Blend</h4>
                        <p className="text-muted-foreground">
                          Our cotton blend fabrics are durable and easy to care for. Machine wash cold and tumble dry
                          low to prevent shrinkage. Remove promptly from dryer to minimize wrinkles.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Modal & Bamboo</h4>
                        <p className="text-muted-foreground">
                          These ultra-soft fabrics require gentle handling. Wash in cold water on a gentle cycle and lay
                          flat to dry for best results. Avoid high heat which can damage the fibers.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium">Performance Fabrics</h4>
                        <p className="text-muted-foreground">
                          Our moisture-wicking performance fabrics should be washed in cold water and air-dried. Avoid
                          fabric softeners which can reduce the moisture-wicking properties.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Maintaining Hidden Padding</h3>
                    <p className="text-muted-foreground mb-4">
                      To ensure the longevity of our hidden padding technology:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                      <li>Avoid wringing or twisting garments when wet</li>
                      <li>Reshape padding while damp</li>
                      <li>Allow to fully dry before wearing</li>
                      <li>Store folded rather than hanging to maintain padding shape</li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Need More Help?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our customer support team is here to assist you with any questions or concerns.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Call Us</h3>
                  <p className="text-muted-foreground">
                    Speak directly with our support team
                    <br />
                    Mon-Fri, 9am-5pm EST
                  </p>
                  <p className="font-medium">1-800-COMFYHUG</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Email Us</h3>
                  <p className="text-muted-foreground">
                    Send us a message anytime
                    <br />
                    We'll respond within 24 hours
                  </p>
                  <p className="font-medium">support@comfyhug.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Live Chat</h3>
                  <p className="text-muted-foreground">
                    Chat with our support team
                    <br />
                    Available 24/7
                  </p>
                  <Link href="#" className="font-medium text-primary hover:underline">
                    Start Chat
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

