import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white p-6 font-sans">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Memoona Bari</h1>
        <p className="text-lg text-gray-300">Freelance Content Writer | Blogs • SEO • Articles</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400">
          Hi, I’m a full-time freelance content writer specializing in blogs, articles, product descriptions, and reviews. I create SEO-friendly content across niches like health, fashion, travel, lifestyle, and education—designed to engage readers and drive results.
        </p>
        <p className="text-gray-400 mt-2">
          With a mix of strategy, creativity, and a tone that fits your brand, I help startups, brands, and SEO firms turn ideas into content that resonates and ranks.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Writing Samples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2, 3].map((sample) => (
            <Card key={sample} className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">Sample Title {sample}</h3>
                <p className="text-gray-400 mb-2">A brief description of this piece of writing goes here. Add your real samples once ready.</p>
                <Button variant="outline" className="text-white border-white">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
        <form className="space-y-4 max-w-md">
          <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-800 text-white rounded" />
          <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-800 text-white rounded" />
          <textarea placeholder="Your Message" className="w-full p-2 bg-gray-800 text-white rounded h-32" />
          <Button className="bg-white text-black w-full">Send Message <Mail className="ml-2 w-4 h-4" /></Button>
        </form>
      </section>
    </div>
  );
}
