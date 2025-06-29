import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Phone } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-200 to-indigo-200 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">Abdulaziz</h1>
          <p className="text-lg text-gray-600">Frontend Developer & Car Sales Expert</p>
        </header>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">🎓 About Me</h2>
              <p className="text-gray-700">
                I'm a student from Uzbekistan, interested in programming, cars, and dietetics. I also play CS2 (Mirage!) and Dota 2. My favorite places are Washington, New York, and Tashkent City Mall.
              </p>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-xl">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">💼 Skills</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>HTML / CSS / JS / React</li>
                <li>Car Sales & Market Analysis</li>
                <li>Basic Trading & Logistics (China → UZ)</li>
                <li>English Level: B1+</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl shadow-xl md:col-span-2">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">📷 Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <img src="https://source.unsplash.com/featured/?car" className="rounded-xl" alt="car" />
                <img src="https://source.unsplash.com/featured/?coding" className="rounded-xl" alt="code" />
                <img src="https://source.unsplash.com/featured/?Tashkent" className="rounded-xl" alt="city" />
                <img src="https://source.unsplash.com/featured/?game" className="rounded-xl" alt="game" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="mt-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">📬 Contact Me</h2>
          <div className="flex justify-center gap-4">
            <Button variant="outline">
              <Mail className="mr-2" /> abdulaziz@example.com
            </Button>
            <Button variant="outline">
              <Phone className="mr-2" /> +998 90 123 45 67
            </Button>
            <Button variant="outline">
              <Github className="mr-2" /> github.com/abdulazizdev
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
